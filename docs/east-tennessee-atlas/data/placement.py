"""Reproduce one-site geographic optimization. Example:
python analysis/placement.py --county Cocke --service hospital --threshold 20
"""
import argparse
import json
from pathlib import Path
from analysis import analyze, haversine

def rank_sites(rows, threshold):
    results=[]
    for candidate in rows:
        point=(candidate['center_lng'],candidate['center_lat'])
        saved=improved=crossed=before=after=pop=0
        for row in rows:
            p=int(row['E_TOTPOP'])
            baseline=row['distance']
            result=min(baseline,haversine(point,(row['center_lng'],row['center_lat'])))
            saved+=(baseline-result)*p
            before+=baseline*p
            after+=result*p
            pop+=p
            if baseline-result>=1:
                improved+=p
            if baseline>threshold and result<=threshold:
                crossed+=p
        results.append(dict(fips=candidate['FIPS'],location=candidate['LOCATION'],personKmSaved=saved,improvedPopulation=improved,thresholdPopulation=crossed,meanBefore=before/pop if pop else 0,meanAfter=after/pop if pop else 0,population=pop))
    return sorted(results,key=lambda r:r['personKmSaved'],reverse=True)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--county',default='Cocke')
    parser.add_argument('--service',choices=['hospital','fire','ambulance','police','grocery','library'],default='hospital')
    parser.add_argument('--threshold',type=float,default=20)
    args=parser.parse_args()
    if args.threshold<0:
        parser.error('Threshold must be nonnegative')
    rows,_=analyze(Path.cwd(),'tract',args.service)
    rows=[r for r in rows if r['COUNTY']==args.county+' County' and int(r['E_TOTPOP'])>0 and r['distance'] is not None]
    if not rows:
        parser.error('No eligible study-area tracts')
    output=dict(county=args.county,service=args.service,thresholdKm=args.threshold,method='one tract-box-center candidate; population weighted great-circle proximity; no capacity model',results=rank_sites(rows,args.threshold))
    path=Path('data/processed/resource-placement.json')
    path.write_text(json.dumps(output,indent=2))
    print(json.dumps(output['results'][0],indent=2))
