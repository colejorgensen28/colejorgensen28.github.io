# East Tennessee Resilience Atlas

**Mapping Community Vulnerability and Critical-Service Accessibility in East Tennessee**

An independent research portfolio application asking where social vulnerability, hazard-loss potential, and limited geographic access to critical services overlap.

## Reproducible analysis links

The atlas keeps its analytical state in the page URL. **Copy analysis link** preserves the active view, county/tract scale, vulnerability indicator, custom weights, service, hazard, selected community, comparison counties, explorer filters, disruption assumptions, and research-tool inputs. Opening that URL restores the same research context. Invalid or out-of-range values fall back to documented defaults.

## Run locally

From the portfolio repository, run `python -m http.server 5173 --directory public` and open `http://localhost:5173/east-tennessee-atlas/#research`.

The county and tract CSV files in this directory contain the baseline screening results. The Research page links to the county input table and the two model configurations used in the hospital-access comparison. Downloadable Python scripts accompany the data.

## Research questions

Where are vulnerable populations? Where are services? Which areas are geographically distant? How sensitive are results to an assumed disruption? Which overlaps merit further study?

## Implemented experience

- Regional landing summary; pan/zoom/search map with 33 counties and 618 tracts, layers, basemaps, opacity, keyboard-selectable polygons and six FEMA hazard measures.
- Published CDC SVI alongside a configurable composite; vulnerability, accessibility, and combined-priority modes.
- USGS hospital/medical-center, ambulance, fire/EMS and police inventories, plus USDA SNAP groceries and IMLS public libraries; 3,302 points in the regional buffer.
- Community profiles with demographics, available margins of error, comparison bars, nearest service and county hazard context.
- Sortable priority tables, two-county comparison, data explorer, scatterplots, regional charts and filtered CSV downloads with model metadata.
- Illustrative disruption sensitivity with before/after distance penalties and populations in tracts crossing a 30 km proxy threshold.
- Research narrative, methods, data provenance, limitations, portfolio overview and Python reproduction.
- Shareable deep links that restore the selected analysis context without storing user data.

## Data and GIS methodology

See docs/data-provenance.md. Frozen snapshots include CDC SVI 2022 (ACS 2018–2022), Census 2020 tract boundaries, current Census county boundaries, USGS structures and FEMA NRI December 2025. Access date: September 9, 2026. Analytical data are public agency observations, not synthetic values. Study-area population is 2,479,366 at both county and tract aggregation; all demographic rows join to geometry.

Vulnerability defaults to the published Tennessee-relative CDC SVI. The custom model min–max normalizes poverty below 150%, no-vehicle households, disability prevalence and service distance across the active geography. Weights are divided by their positive sum. Constant indicators normalize to zero; missing inputs remain missing and prevent a complete score. Weighting is a research decision.

Accessibility uses each boundary-box center and haversine distance (Earth radius 6,371 km) to the nearest selected USGS facility in the regional buffer. This is geographic proximity, not road distance or travel time. Threshold populations assign the full population of each qualifying area; they are coarse screening proxies, not household travel estimates.

Hazard context is the selected FEMA Expected Annual Loss score divided by 100. Tracts inherit county values. EAL describes loss potential, not a local hazard footprint or individual risk probability.

Combined priority is the mean of vulnerability, normalized service distance and hazard EAL / 100. A nonzero access weight in the custom vulnerability model partly double-counts access; reduce that weight to zero to avoid overlap. This is not the official FEMA risk score.

The scenario adds a uniform, explicit distance penalty to tract centers in a selected county. It does not close named roads, calculate routes or identify newly isolated residents. It reports only populations in tracts crossing an assumed distance threshold.

## Deployment

GitHub Pages serves the atlas from the portfolio’s `/east-tennessee-atlas/` directory. Analytical data and Leaflet are bundled with the site. Basemap tiles and on-demand driving routes use external services. Dataset references and limitations are in `provenance.md`.

## Limitations and future work

ACS estimates have uncertainty. Facility locations do not establish capacity or current operation. Centers can fall outside irregular polygons and are not population weighted. A finite buffer can miss alternative facilities. Data vintages differ. County hazard context cannot resolve tract exposure. Correlation is descriptive, not causal. Composite indices depend on indicators and weights.

Validated pharmacies, designated shelters and community centers; household income; authoritative infrastructure and closure layers; region-wide network accessibility; formal spatial inference; and capacity-aware resource optimization remain future work. The new routing tool is on demand for selected communities; the resource-placement model is geographic and exploratory. No substitute facilities, fabricated travel times or invented real closures are shown. Partner with local agencies to validate capacity, closures and population-weighted origins before operational application.

This project is an exploratory academic geospatial analysis and is not intended to replace official emergency-management planning. It is not affiliated with or endorsed by ORNL or DOE.
