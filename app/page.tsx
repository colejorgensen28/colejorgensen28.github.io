import { ArrowUpRight, ArrowDown, MapPin, Compass } from 'lucide-react';

const demo = 'https://colejorgensen28-jobfinder-mvp-streamlit-app-y5bg8r.streamlit.app/';
const terrainStory = 'https://storymaps.arcgis.com/stories/38c29a40909d4fcd8070e5e6805f54a2';

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="header wrap">
      <a href="#home" className="identity" aria-label="Cole Jorgensen home"><span className="monogram">CJ<span>↗</span></span><span>Cole Jorgensen</span></a>
      <nav aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#work">Projects</a><a href="#connect">Connect</a></nav>
    </header>
    <main id="main">
      <section id="home" className="intro wrap" aria-labelledby="intro-title">
        <div className="eyebrow"><span className="dot" /> GIS · APPLICATIONS · STORYTELLING</div>
        <h1 id="intro-title">A sense of place.<br /><span>A world of possibility.</span></h1>
        <div className="intro-bottom"><p>I’m Cole Jorgensen. I use maps, data, and software to explore places and build useful tools.</p><a className="work-link" href="#work">Explore my work <ArrowDown size={20} /></a></div>
      </section>

      <section id="about" className="about wrap" aria-labelledby="about-title">
        <div className="about-photo"><img src="/images/cole-jorgensen.jpeg" alt="Cole Jorgensen wearing a dark suit and tie" width={3024} height={4032} loading="lazy" /></div>
        <div className="about-copy">
          <div className="eyebrow">BEHIND THE PROJECTS</div><h2 id="about-title">About me</h2>
          <p className="about-lead">I bring maps, data, and application development together to explore how people connect with places.</p>
          <p>My work spans GIS analysis, interactive storytelling, and practical web applications. Through terrain analysis, Church Atlas, and JobFinder, I explore how location can support planning and help people find communities and opportunities.</p>
          <p>I’m interested in GIS analysis and web mapping roles where I can turn spatial data into clear explanations and useful tools. This portfolio is intended for GIS employers, internship supervisors, and professionals working in planning and spatial application development.</p>
          <div className="tags"><span>Geographic information systems</span><span>Web applications</span><span>Interactive storytelling</span></div>
        </div>
        <div className="education" aria-labelledby="education-title">
          <h3 id="education-title">Education</h3><div className="education-grid">
            <article className="education-entry"><p className="education-date">Expected May 2027</p><h4>University of Tennessee, Knoxville</h4><p className="education-degree">Bachelor of Science in Geographic Information Science and Technology</p><p><strong>Relevant coursework:</strong> GEOG 312 GIS Programming; GEOG 454 GIS for Terrain Analysis</p><p><strong>Academic focus:</strong> Spatial data analysis and programming for environmental, terrain, and urban applications.</p></article>
            <article className="education-entry"><p className="education-date">June 2022 – December 2025</p><h4>Florida International University</h4><p className="education-degree">Coursework in Crime Science</p><p>Minor in Political Science</p><p>GPA: 3.5</p></article>
          </div>
        </div>
      </section>

      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Projects</h2><span>THREE PRIORITY EXAMPLES</span></div>

        <article id="terrain" className="terrain-project" aria-labelledby="terrain-title">
          <div className="terrain-summary">
            <div className="eyebrow">01 / GIS ANALYSIS · COMPLETE PROFESSIONAL STORY</div>
            <h3 id="terrain-title">Knoxville’s Urban Growth Based on Terrain</h3>
            <p className="project-lead">Using terrain and access to investigate housing suitability.</p>
            <p>An individual project completed in Spring 2026 for GEOG 454 GIS for Terrain Analysis at the University of Tennessee, Knoxville. I combined physical conditions and planning factors in ArcGIS Pro, then explained the analysis in an ArcGIS StoryMap.</p>
            <div className="tags"><span>ArcGIS Pro</span><span>Terrain analysis</span><span>Suitability modeling</span><span>StoryMaps</span></div>
            <p className="project-note"><strong>Evidence:</strong> A personally hosted export of the final suitability map appears below, with an accessible description and source notes. Next, I plan to add a workflow excerpt showing the factor scores and weighting decisions.</p>
          </div>

          <div className="professional-story">
            <section aria-labelledby="terrain-context"><h4 id="terrain-context">Context and purpose</h4><p>Knoxville’s terrain creates both opportunities and constraints for housing growth. For my Spring 2026 terrain-analysis project, I investigated how slope, access to roads and existing development, environmental constraints, land cover, and zoning could be combined to identify relatively suitable areas. My goal was to build a transparent spatial model and communicate what it could tell a planning audience.</p></section>
            <section aria-labelledby="terrain-role"><h4 id="terrain-role">My role</h4><p>This was an individual project. I carried out the GIS analysis, developed the maps, and organized the results into the StoryMap. The underlying elevation, roads, buildings, flood-zone, land-cover, boundary, and zoning datasets came from the agencies and organizations credited with the evidence.</p></section>
            <section aria-labelledby="terrain-methods"><h4 id="terrain-methods">Methods and tools</h4><p>I used ArcGIS Pro to put datasets into a shared coordinate system and clip them to the study area. I derived slope from a digital elevation model and calculated distance to roads, water, and buildings. I reclassified the factors onto a common 1–5 suitability scale and combined them using weighted overlay.</p><p>Slope received the greatest emphasis, with road access and proximity to existing development also important. Gentle slopes of 0–5 degrees received high suitability. I used ArcGIS StoryMaps to connect the method to maps of terrain, accessibility, environmental constraints, and the final housing-suitability surface.</p></section>
            <section aria-labelledby="terrain-results"><h4 id="terrain-results">Results and limits</h4><p>I produced a set of four web maps and a published StoryMap explaining the analysis. The model indicates stronger suitability where gentle terrain, road access, existing development, suitable land cover and zoning, and fewer environmental constraints coincide.</p><p>These results describe relative suitability under the model’s assumptions. They do not predict which parcels will be developed. Ownership, property values, utility capacity, developer interest, housing demand, and future zoning decisions would require further investigation before making a real planning decision.</p></section>
            <section aria-labelledby="terrain-reflection"><h4 id="terrain-reflection">Reflection</h4><p>The main lesson I take from this project is that a suitability map reflects decisions about factors, scores, and weights. Explaining those decisions is part of making the analysis useful. This experience connects my interest in GIS with planning questions and clear public communication. My next step would be to compare alternative weights and document how sensitive the results are to those choices.</p></section>
          </div>

          <figure className="terrain-evidence" aria-labelledby="terrain-evidence-title">
            <h4 id="terrain-evidence-title">Evidence · Final housing suitability map</h4>
            <p>This static export preserves the final model as evidence on my personal portfolio. It can be viewed here without signing into ArcGIS.</p>
            <a href="/evidence/knoxville-housing-suitability.png" target="_blank" rel="noreferrer" aria-label="Open the full-resolution Knoxville housing suitability map"><img src="/evidence/knoxville-housing-suitability.png" alt="Knoxville housing suitability model with roads and the city boundary. Green indicates higher relative suitability and red lower suitability. A detailed text description follows." width={2400} height={1500} loading="lazy" /></a>
            <div className="map-legend" aria-label="Relative modeled suitability, lower to higher"><span>Lower suitability</span><span className="legend-ramp" aria-hidden="true" /><span>Higher suitability</span></div>
            <figcaption><strong>Knoxville housing suitability — final model.</strong> Analysis and map by Cole Jorgensen, Spring 2026. This is a static rendering of my final web map, showing the modeled suitability layer, roads, and city boundary. It documents a course analysis and should be read with the limitations above.</figcaption>
            <details className="evidence-description"><summary>Map description and source credits</summary><p>The map shows the irregular Knoxville city boundary in black with a network of gray roads. Most of the displayed modeled area is green, with lower-suitability red areas in narrower patches, including along parts of the river corridor. The red-to-yellow-to-green ramp represents lower to higher modeled suitability; it is a continuous display, not a parcel approval or a forecast. White areas have no suitability surface shown in this export. The description provides a text equivalent without relying only on color.</p><p>Project data sources credited in the original StoryMap: USGS 3DEP elevation; U.S. Census Bureau TIGER/Line roads and water; Microsoft Building Footprints; FEMA flood zones; Esri/USGS National Land Cover Database; City of Knoxville boundary; Knoxville–Knox County Planning zoning; and KGIS. Static rendering produced through Esri’s public map-printing service. <a href="/evidence/terrain-evidence-notes.txt">Read the evidence and attribution notes</a>.</p></details>
            <div className="evidence-links"><a className="text-link" href="/evidence/knoxville-housing-suitability.png" download>Download map evidence <ArrowDown size={17} /></a><a className="text-link" href={terrainStory} target="_blank" rel="noreferrer">Read the original StoryMap <ArrowUpRight size={17} /></a></div>
            <p className="project-note">The original interactive StoryMap is hosted through UTK ArcGIS. The map image and explanation on this page are stored separately in my personal GitHub repository.</p>
          </figure>
        </article>

        <article id="church-atlas-project" className="church-feature" aria-labelledby="church-title">
          <div><div className="eyebrow">02 / WEB GIS · APPLICATION PROTOTYPE</div><h3 id="church-title">Church Atlas</h3><p>Church Atlas combines an interactive map with structured filters to help visitors explore sample church listings. Users can search an area, adjust a geographic radius, filter by denomination and visit needs, compare profiles, and save favorites and a visit plan in their browser.</p><div className="tags"><span>JavaScript</span><span>Leaflet</span><span>Web GIS</span><span>Interface design</span></div><p className="project-note"><strong>Skills:</strong> Geographic filtering, organizing categorical data, and building an interactive map interface.</p><p className="project-note"><strong>Evidence plan:</strong> The working prototype is linked here and stored in my personal GitHub repository. I plan to add an annotated screenshot and a short code excerpt explaining the distance and filtering logic.</p></div>
          <div className="church-action"><a className="primary-link" href="/church-atlas/">Open app demo <ArrowUpRight size={19} /></a><p>Sample listings and illustrative source-status labels. Leaflet map; © OpenStreetMap contributors. Favorites and visit plans are stored locally in the browser.</p></div>
        </article>

        <article id="jobfinder-project" className="featured" aria-labelledby="jobfinder-title">
          <div className="feature-copy"><div className="eyebrow">03 / PYTHON · APPLICATION PROTOTYPE</div><h3 id="jobfinder-title">JobFinder<span className="title-dot">.</span></h3><p className="lead">The job search, with location in focus.</p><p>A Python and Streamlit prototype for exploring jobs on a map, narrowing results with filters, and comparing opportunities with commute and job-fit information.</p><div className="tags"><span>Python</span><span>Streamlit</span><span>GIS</span></div><p className="project-note"><strong>Skills:</strong> Python application development, location-based information design, and turning search criteria into an interactive workflow.</p><p className="project-note"><strong>Evidence plan:</strong> The linked demo shows the intended user experience. I plan to add a personally stored screenshot of the map and filters plus a focused code excerpt so the evidence remains available if the demo is asleep.</p><a className="primary-link" href={demo} target="_blank" rel="noreferrer">Open app demo <ArrowUpRight size={19} /></a><p className="demo-note">Prototype with demonstration data. Opens on Streamlit; the free demo may need to wake after inactivity.</p></div>
          <div className="feature-index" aria-label="JobFinder features"><div className="feature-top"><Compass size={28} /><span>JOBFINDER / FIELD NOTES</span></div><div className="feature-word">Find your<br />next <em>place.</em></div><ul><li><span>01</span> Discover jobs by location <MapPin size={18} /></li><li><span>02</span> Filter what matters <ArrowUpRight size={18} /></li><li><span>03</span> Compare your commute <ArrowUpRight size={18} /></li></ul><span className="feature-caption">A GIS-based job finding application</span></div>
        </article>
        <p className="additional-work">More geographic storytelling: <a href="https://storymaps.arcgis.com/stories/651b5e42fbf14de0bf85e3101c221870" target="_blank" rel="noreferrer">The Everglade Snail Kite <ArrowUpRight size={16} /></a></p>
      </section>

      <section id="connect" className="connect wrap" aria-labelledby="connect-title"><div><div className="eyebrow">LET’S CONNECT</div><h2 id="connect-title">Connect</h2><p>Interested in GIS, web mapping, or spatial application development? Visit my GitHub profile to explore my portfolio repository and connect with my work.</p></div><a className="primary-link" href="https://github.com/colejorgensen28" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={19} /></a></section>
    </main>
    <footer className="footer wrap"><div><strong>Cole Jorgensen</strong><p>Maps, software, and stories.</p></div><a href="#home">Back to home <ArrowUpRight size={17} /></a></footer>
  </>;
}
