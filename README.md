# Cole Jorgensen — Portfolio

Portfolio featuring a complete professional story for Knoxville terrain and housing suitability analysis, substantive Church Atlas and JobFinder entries, and an additional wildlife StoryMap link.

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

Descriptions are based on Cole's StoryMaps and existing JobFinder README. The Knoxville image is the thumbnail of Cole's final suitability web map (ArcGIS item 2a0829d63e9d43d4a057abe72abeaa30). The bird image is the cover resource from Cole's snail kite StoryMap. Original image rights remain with their respective owners; see the original story maps for source context.

## Portfolio Foundation

The main page includes Home, About, Projects, and Connect sections. The terrain story describes Cole's individual Spring 2026 project for GEOG 454 GIS for Terrain Analysis. Church Atlas and JobFinder include descriptions, skills, and evidence plans.

Essential terrain evidence is stored independently of UTK in `public/evidence/` and copied into the GitHub Pages export. `knoxville-housing-suitability.png` is a static 2400 x 1500 rendering of the original final web map's suitability, streets, and boundary layers, produced with Esri's public map-printing service. It contains no stock imagery or external basemap. The analytical raster resolution remains 30 m. The accompanying notes identify source data, the original work, display interpretation, and limitations.

The original interactive StoryMap still uses UTK ArcGIS. Keep permitted personal copies of original GIS project files/data for future editing; the static export preserves the essential viewable evidence, not the editable project. The résumé location and Canvas response are recorded in the private local assignment plan, outside this public repository.

