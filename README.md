# Cole Jorgensen — Portfolio

Portfolio featuring complete professional stories for Knoxville terrain and housing suitability analysis and the Everglade Snail Kite StoryMap, plus substantive Church Atlas and JobFinder entries. Four visual covers unfold the project content in a responsive gallery.

Live site: https://colejorgensen28.github.io/

## Update the site

Use Node.js 22.13 or newer.

1. Edit project descriptions and links in `app/page.tsx` and styles in `app/globals.css`.
2. Run `npm ci` if dependencies are not installed.
3. Run `npm run dev` to preview locally.
4. Run `npm run build` to export the site to `dist/client`.
5. Copy the contents of `dist/client` into `docs`, including `.nojekyll`.
6. Commit and push the updated source and `docs` folder to `main`.

GitHub Pages publishes from the `main` branch's `/docs` folder. No GitHub Actions workflow configuration is needed. JobFinder runs separately on Streamlit; this portfolio links to its existing demo.

Church Atlas is hosted at `/church-atlas/`. Its editable static source is in `public/church-atlas/` and is included automatically in each export. It uses sample listings and browser-local storage, with Leaflet/OpenStreetMap for the map.

## Project sources

- Church Atlas: https://colejorgensen28.github.io/church-atlas/
- JobFinder: https://colejorgensen28-jobfinder-mvp-streamlit-app-y5bg8r.streamlit.app/
- Knoxville: https://storymaps.arcgis.com/stories/38c29a40909d4fcd8070e5e6805f54a2
- Everglade snail kite: https://storymaps.arcgis.com/stories/651b5e42fbf14de0bf85e3101c221870

Descriptions are based on Cole's StoryMaps and existing JobFinder material. Gallery covers use personally hosted static map exports and screenshots of the running application prototypes. The original StoryMaps retain their own photography credits. The gallery uses the snail kite habitat map as its cover; it does not reuse the original wildlife photographs.

## Portfolio Foundation

The main page includes Home, About, Projects, and Connect sections, with Projects directly after the home introduction. The terrain story describes Cole's individual Spring 2026 project for GEOG 454 GIS for Terrain Analysis. The snail kite story describes his individual Spring 2026 GEOG 311 Geovisualization and Geographic Information Science project. Church Atlas and JobFinder include descriptions, skills, screenshots, and evidence plans. Native grouped disclosures provide keyboard operation and allow one project open at a time.

Essential terrain evidence is stored independently of UTK in `public/evidence/` and copied into the GitHub Pages export. `knoxville-housing-suitability.png` is a static 2400 x 1500 rendering of the original final web map's suitability, streets, and boundary layers, produced with Esri's public map-printing service. It contains no stock imagery or external basemap. The analytical raster resolution remains 30 m. The accompanying notes identify source data, the original work, display interpretation, and limitations.

The snail kite export `snail-kite-critical-habitat.png` preserves the species-focused web map. Habitat boundaries are USFWS data, shared under CC BY 4.0, filtered to the Everglade snail kite. The basemap attribution remains printed in the image. Full credits and interpretation are in `snail-kite-evidence-notes.txt`. The export is a rendering of live services at export time, not an April 2026 data snapshot.

The original interactive StoryMaps still use UTK ArcGIS. Keep permitted personal copies of original GIS project files/data for future editing; static exports preserve the essential viewable evidence, not editable projects. The résumé location and Canvas response are recorded in the private local assignment plan, outside this public repository.

