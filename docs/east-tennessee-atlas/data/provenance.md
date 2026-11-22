# Data provenance

Snapshot access date: 2026-09-09. Analytical snapshots: dist/data.

| Dataset | Agency | Vintage | Resolution | Source | Limitation |
|---|---|---|---|---|---|
| Tennessee SVI | CDC/ATSDR | 2022, ACS 2018–2022 | County | https://svi.cdc.gov/Documents/Data/2022/csv/states_counties/Tennessee_county.csv | State-relative ranks; estimate uncertainty |
| Tennessee SVI | CDC/ATSDR | 2022, ACS 2018–2022 | Tract | https://svi.cdc.gov/Documents/Data/2022/csv/states/Tennessee.csv | Negative sentinels indicate missing values; MOEs retained |
| County geometry | Census | Current snapshot 2026 | County | https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1 | Boundary vintage differs from demographics |
| Tract geometry | Census | 2020 | Tract | https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/tigerWMS_Census2020/MapServer/6 | Display generalization 0.002 degrees |
| Structures | USGS | Rolling snapshot 2026 | Point | https://carto.nationalmap.gov/arcgis/rest/services/structures/MapServer | Layers 49,50,51,53; status/capacity not validated |
| National Risk Index | FEMA | December 2025 v1.20.0 | County | https://services.arcgis.com/XG15cJAlne2vxtgt/arcgis/rest/services/National_Risk_Index_Counties/FeatureServer/0 | EAL is loss potential, not direct exposure; inherited by tracts |

USGS extraction envelope: (-86,34.7) to (-81.5,36.9), EPSG:4326. The facility count refers to this buffered inventory, not an exact study polygon clip. Each query was checked for transfer-limit truncation. Record source originators and load dates are retained. Neither guarantees current operation.

The Census tract query returned 1,701 statewide records. Application filtering uses matched study-area CDC FIPS. FEMA source item 39485e8035d446a5bff03259508ae355 is owned by FEMA_NationalRiskIndex and credits FEMA. Columns used: IFLD_EALS, HWAV_EALS, TRND_EALS, WFIR_EALS, LNDS_EALS, SWND_EALS. Full FEMA risk score is not substituted because it already includes vulnerability/resilience.

CDC CSV originals are retained in data/raw. Processed JSON preserves field names. Python validation reports include SHA-256 hashes. CARTO/OpenTopoMap tiles provide context only; analytical polygons remain available without tiles.

## September 10, 2026 expansion

**USDA FNS SNAP retailers:** official ArcGIS item https://www.arcgis.com/home/item.html?id=8b260f9a10b0459aa441ad8588c2251c, owned by FNS_SNAP_RPMD. Service: https://services1.arcgis.com/RLQu0rK7h4kbsBq5/arcgis/rest/services/snap_retailer_location_data/FeatureServer/0 . Query the same regional envelope, filter Store_Type IN ('Grocery Store','Supermarket','Super Store'), order by ObjectId, paginate at 1,000. Two pages returned 1,000 and 54 records; the second page was not truncated. Retain Record_ID for deduplication. Snapshot includes 1,054 retailers. Coverage excludes non-SNAP stores, convenience stores and other store formats. Authorization is not evidence of operating hours, capacity, stock or nutritional quality. Documentation: https://www.fns.usda.gov/snap/retailer-locator . Raw query results are in data/raw/snap-groceries*.json.

**IMLS Public Libraries Survey FY2024:** https://www.imls.gov/sites/default/files/2026-06/pls_fy2024_csv.zip . Documentation landing page: https://www.imls.gov/research-evaluation/surveys/public-libraries-survey-pls . Read CSV/pls_fy24_outlet_pud24i.csv using Windows-1252. Keep central (CE) and branch (BR) outlets within the envelope; exclude STATSTRU=23 (reported temporary closures). Snapshot includes 268 outlets. Excludes bookmobiles; excludes reported closure but does not verify current operations. Libraries are not emergency-shelter designations. A source subset is preserved in data/raw/libraries-region.json.

**Census internal points:** Census 2020 TIGERweb tract layer 6, fields GEOID, INTPTLAT, INTPTLON, state=47, no geometry. All 618 study tracts match. These official internal points are used exclusively by the new road-route tool. Baseline proximity, outage, and placement retain boundary-box centers so the original reproducible model remains consistent.

**Driving routes:** https://router.project-osrm.org/ using OSRM with OpenStreetMap data, requested on demand. Five nearest candidate facilities by great-circle distance are compared through /table/v1/driving; /route/v1/driving supplies the fastest candidate's geometry and driving duration. Candidate restriction can miss a faster alternative. Reject routes snapping farther than 1.5 km from the origin or destination. No live traffic, closure, capacity or emergency-vehicle model. OSM data vintage is not supplied by the endpoint, so record the request timestamp instead of inventing a date. No regional bulk scraping is performed. Calls are limited to one per 1.1 seconds within the tool, and results are cached only for the session. Public coordinates are transmitted; do not use this endpoint for private household origins. Attribution: OSRM, OpenStreetMap contributors, ODbL; fix-map link is displayed. Policy: https://routing.openstreetmap.de/about.html . These routes do not replace the geographic-proximity layer or establish population-wide travel-time estimates.

Reprocessing: python analysis/process-extra-services.py uses the frozen source subsets. Optional external refresh must repeat the original filters and pagination, preserve a new access date, and validate completeness. The service-point inventory now contains 3,302 records across six categories in the buffer.
