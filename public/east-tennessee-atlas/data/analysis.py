"""Reproduce atlas screening. Python 3.10+, no dependencies.
Run: python analysis/analysis.py --geography tract --service hospital
Optional: --custom --weights 25 25 25 25. Outputs: data/processed.
"""
import argparse
import csv
import hashlib
import json
import math
from pathlib import Path

EAST = set('Anderson Bledsoe Blount Bradley Campbell Claiborne Carter Cocke Cumberland Grainger Greene Hancock Hamilton Hamblen Hawkins Jefferson Johnson Knox Loudon Marion McMinn Meigs Monroe Morgan Polk Rhea Roane Scott Sevier Sullivan Unicoi Union Washington'.split())

def number(value):
    try:
        n = float(value)
        return n if math.isfinite(n) and n >= 0 else None
    except (ValueError, TypeError):
        return None

def vertices(coords):
    if isinstance(coords[0], (int, float)):
        yield coords
    else:
        for child in coords:
            yield from vertices(child)

def bbox_center(feature):
    xy = list(vertices(feature['geometry']['coordinates']))
    return ((min(p[0] for p in xy) + max(p[0] for p in xy)) / 2,
            (min(p[1] for p in xy) + max(p[1] for p in xy)) / 2)

def haversine(a, b):
    lon1, lat1, lon2, lat2 = map(math.radians, (*a, *b))
    v = math.sin((lat2-lat1)/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin((lon2-lon1)/2)**2
    return 6371 * 2 * math.atan2(math.sqrt(v), math.sqrt(max(0, 1-v)))

def normalize(rows, key):
    valid = [number(r.get(key)) for r in rows if number(r.get(key)) is not None]
    if not valid:
        return [None] * len(rows)
    lo, hi = min(valid), max(valid)
    return [None if number(r.get(key)) is None else 0.0 if hi == lo else (number(r[key])-lo)/(hi-lo) for r in rows]

def analyze(root, geography='county', service='hospital', weights=(25,25,25,25), custom=False, hazard='IFLD_EALS'):
    if len(weights) != 4 or any(w < 0 for w in weights) or sum(weights) <= 0:
        raise ValueError('Four nonnegative weights with a positive sum are required')
    public = root / 'dist' / 'data'
    load = lambda name: json.loads((public/name).read_text(encoding='utf-8-sig'))
    rows = [r for r in load('tracts.json' if geography == 'tract' else 'svi.json') if r['COUNTY'].removesuffix(' County') in EAST]
    boundaries = {f['properties']['GEOID']: f for f in load('tracts.geojson' if geography == 'tract' else 'counties.geojson')['features']}
    hazards = {f['attributes']['STCOFIPS']: f['attributes'] for f in load('hazards.json')['features']}
    facilities = [f for f in load('facilities.json') if f['type'] == service]
    if not facilities:
        raise ValueError('No facilities for requested service')
    missing = []
    for r in rows:
        r.update(hazards.get(r['FIPS'][:5], {}))
        f = boundaries.get(r['FIPS'])
        if not f:
            missing.append(r['FIPS'])
            r['distance'] = None
            continue
        center = bbox_center(f)
        nearest = min(facilities, key=lambda f: haversine(center, (f['lng'], f['lat'])))
        r['distance'] = haversine(center, (nearest['lng'], nearest['lat']))
        r['nearest'] = nearest['name']
        r['center_lng'], r['center_lat'] = center
    components = [normalize(rows,k) for k in ('EP_POV150','EP_NOVEH','EP_DISABL','distance')]
    for i,r in enumerate(rows):
        parts = [c[i] for c in components]
        vulnerability = None if any(p is None for p in parts) else sum(w*p for w,p in zip(weights,parts))/sum(weights)
        r['custom_vulnerability'] = vulnerability
        r['vulnerability'] = vulnerability if custom else number(r.get('RPL_THEMES'))
        r['access_score'] = components[3][i]
        raw_hazard = number(r.get(hazard))
        r['hazard_score'] = None if raw_hazard is None else raw_hazard/100
        parts = [r['vulnerability'],r['access_score'],r['hazard_score']]
        r['combined_priority'] = None if any(p is None for p in parts) else sum(parts)/3
        r['service'] = service
        r['access_method'] = 'boundary-box center great-circle km'
        r['hazard_resolution'] = 'county'
    return rows, missing

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=Path.cwd())
    parser.add_argument('--geography',choices=['county','tract'],default='county')
    parser.add_argument('--service',choices=['hospital','fire','ambulance','police','grocery','library'],default='hospital')
    parser.add_argument('--weights',nargs=4,type=float,default=[25,25,25,25])
    parser.add_argument('--custom',action='store_true')
    parser.add_argument('--hazard',choices=['IFLD_EALS','HWAV_EALS','TRND_EALS','WFIR_EALS','LNDS_EALS','SWND_EALS'],default='IFLD_EALS')
    args = parser.parse_args()
    rows, missing = analyze(args.root,args.geography,args.service,args.weights,args.custom,args.hazard)
    out = args.root/'data'/'processed'
    out.mkdir(parents=True,exist_ok=True)
    columns = ['FIPS','COUNTY','LOCATION','E_TOTPOP','RPL_THEMES','EP_POV150','MP_POV150','EP_DISABL','MP_DISABL','EP_NOVEH','EP_AGE65','distance','nearest','center_lng','center_lat','custom_vulnerability','vulnerability','access_score','hazard_score','combined_priority','service','access_method','hazard_resolution']
    with (out/f'{args.geography}-{args.service}.csv').open('w',newline='',encoding='utf-8') as stream:
        writer = csv.DictWriter(stream,fieldnames=columns,extrasaction='ignore')
        writer.writeheader()
        writer.writerows(sorted(rows,key=lambda r:r['combined_priority'] if r['combined_priority'] is not None else -1,reverse=True))
    report = {'geography':args.geography,'rows':len(rows),'population':sum(int(r['E_TOTPOP']) for r in rows),'missing_boundaries':missing,'weights':args.weights,'hazard':args.hazard,'custom_model':args.custom,'service':args.service,'sources_accessed':'2026-09-09','sha256':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in (args.root/'dist'/'data').glob('*.json')}}
    (out/f'{args.geography}-validation.json').write_text(json.dumps(report,indent=2))
    (out/f'{args.geography}-parity.json').write_text(json.dumps({r['FIPS']:{'distance':r['distance'],'combined_priority':r['combined_priority']} for r in rows}))
    print(json.dumps({k:v for k,v in report.items() if k!='sha256'},indent=2))
    if missing:
        raise SystemExit('Some demographic rows have no matching geometry; inspect validation report')

if __name__ == '__main__':
    main()
