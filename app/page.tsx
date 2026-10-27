import { ArrowUpRight, ArrowDown } from 'lucide-react';
import ProjectDisclosure from '../components/ProjectDisclosure';
import './project-gallery.css';

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
          <p>My work spans GIS analysis, interactive storytelling, and practical web applications. Through terrain analysis, wildlife storytelling, Church Atlas, and JobFinder, I explore how location can support planning, explain environmental topics, and help people find communities and opportunities.</p>
          <p>I’m interested in GIS analysis and web mapping roles where I can turn spatial data into clear explanations and useful tools. This portfolio is intended for GIS employers, internship supervisors, and professionals working in planning and spatial application development.</p>
          <div className="tags"><span>Geographic information systems</span><span>Web applications</span><span>Interactive storytelling</span></div>
        </div>
        <div className="education" aria-labelledby="education-title">
          <h3 id="education-title">Education</h3><div className="education-grid">
            <article className="education-entry"><p className="education-date">Expected May 2027</p><h4>University of Tennessee, Knoxville</h4><p className="education-degree">Bachelor of Science in Geographic Information Science and Technology</p><p><strong>Relevant coursework:</strong> GEOG 311 Geovisualization and Geographic Information Science; GEOG 312 GIS Programming; GEOG 454 GIS for Terrain Analysis</p><p><strong>Academic focus:</strong> Spatial data analysis and programming for environmental, terrain, and urban applications.</p></article>
            <article className="education-entry"><p className="education-date">June 2022 – December 2025</p><h4>Florida International University</h4><p className="education-degree">Coursework in Crime Science</p><p>Minor in Political Science</p><p>GPA: 3.5</p></article>
          </div>
        </div>
      </section>

      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Projects</h2><span>04 / SELECTED WORK</span></div>
        <p className="gallery-intro">Choose a cover to explore the story, evidence, and tools behind each project.</p>
        <div className="project-gallery">
          <ProjectDisclosure id="terrain" number="01" category="GIS / URBAN PLANNING" title="Knoxville’s Urban Growth Based on Terrain"
            description="An individual Spring 2026 GEOG 454 project combining terrain and planning factors to investigate housing suitability."
            cover="/evidence/knoxville-housing-suitability.png" coverAlt="Knoxville housing suitability map with a green and red model surface, roads, and the city boundary." coverWidth={2400} coverHeight={1500}
            tags={['ArcGIS Pro', 'Terrain analysis', 'Suitability modeling']}>
<div className="professional-story">
            <section aria-labelledby="terrain-context"><h4 id="terrain-context">Context and purpose</h4><p>Knoxville’s terrain creates opportunities and constraints for housing growth. For my individual Spring 2026 GEOG 454 GIS for Terrain Analysis project, I investigated how terrain, accessibility, environmental constraints, land cover, and zoning could identify relatively suitable housing areas. My goal was to explain a spatial model to a planning audience.</p></section>
            <section aria-labelledby="terrain-role"><h4 id="terrain-role">My role</h4><p>I carried out the GIS analysis, developed the maps, and organized the results into an ArcGIS StoryMap. I used agency datasets credited below; my contribution was combining, analyzing, and communicating them.</p></section>
            <section aria-labelledby="terrain-methods"><h4 id="terrain-methods">Methods and tools</h4><p>In ArcGIS Pro, I aligned coordinate systems, clipped datasets to the study area, derived slope from elevation, and calculated distance to roads, water, and buildings. I reclassified factors onto a common 1–5 suitability scale and combined them using weighted overlay. Slope received the greatest emphasis, followed by road access and proximity to existing development. Gentle slopes of 0–5 degrees received high suitability.</p></section>
            <section aria-labelledby="terrain-results"><h4 id="terrain-results">Results and limits</h4><p>I produced four web maps and a published StoryMap. Higher modeled suitability occurs where gentle terrain, access, suitable land cover and zoning, and fewer environmental constraints coincide. The final map below preserves that result. It describes relative suitability under my assumptions; ownership, costs, utilities, demand, and future zoning require further investigation before a planning decision.</p></section>
            <section aria-labelledby="terrain-reflection"><h4 id="terrain-reflection">Reflection</h4><p>I learned that a suitability map reflects choices about factors, scores, and weights. Explaining those choices is part of making the analysis useful. This project connected my GIS skills with planning and public communication. My next step is to document the exact scores and weights and compare alternatives to assess how sensitive the results are.</p></section>
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
            
          </ProjectDisclosure>

          <ProjectDisclosure id="snail-kite" number="02" category="GEOVISUALIZATION / WILDLIFE" title="The Everglade Snail Kite"
            description="An individual Spring 2026 GEOG 311 StoryMap connecting a wildlife narrative with a species-focused critical-habitat map."
            cover="/evidence/snail-kite-critical-habitat.png" coverAlt="Map of peninsular Florida with designated Everglade snail kite critical habitat highlighted in dark red." coverWidth={2400} coverHeight={1500}
            tags={['ArcGIS StoryMaps', 'Web mapping', 'Geographic communication']}>
            <p className="project-lead">Giving an ecological story a geographic context.</p>
            <div className="professional-story">
              <section aria-labelledby="kite-context"><h4 id="kite-context">Context and purpose</h4><p>For my individual Spring 2026 GEOG 311 Geovisualization and Geographic Information Science project at the University of Tennessee, Knoxville, I created a StoryMap introducing the Everglade snail kite. I wanted to connect a wildlife narrative with a map locating designated critical habitat in Florida.</p></section>
              <section aria-labelledby="kite-role"><h4 id="kite-role">My role</h4><p>I composed the StoryMap, organized supporting information, and configured the species-focused web map. My contribution was geographic presentation and communication. Habitat boundaries came from the U.S. Fish and Wildlife Service; ecological information and photographs were credited to their original sources.</p></section>
              <section aria-labelledby="kite-methods"><h4 id="kite-methods">Methods and tools</h4><p>I used ArcGIS StoryMaps to combine narrative, attributed imagery, and an interactive map, drawing on information cited from USFWS and the Florida Fish and Wildlife Conservation Commission. In ArcGIS Map Viewer, I filtered the public USFWS Critical Habitat layer to the common name “Everglade snail kite.” I saved a focused view and embedded it with a legend so the mapped evidence directly supported the text.</p></section>
              <section aria-labelledby="kite-results"><h4 id="kite-results">Results and limits</h4><p>The result was a published StoryMap, first published April 1, 2026, and an accompanying interactive habitat map. The static map below preserves the geographic evidence independently of university access. The agency boundaries represent designated critical habitat; they do not show the complete species range, individual birds, or nests. This project did not produce new field observations or a population estimate.</p></section>
              <section aria-labelledby="kite-reflection"><h4 id="kite-reflection">Reflection</h4><p>I learned that narrative introduces a subject while a map places it geographically. Clear labels and source credits help readers distinguish my presentation work from the underlying agency data. This strengthened my interest in environmental communication. In future revisions, I would review the map description alongside the narrative to keep its scope and limitations clear.</p></section>
            </div>
            <figure className="terrain-evidence" aria-labelledby="kite-evidence-title">
              <h4 id="kite-evidence-title">Evidence · Designated critical habitat map</h4>
              <p>This personally hosted static rendering preserves the map evidence independently of my university ArcGIS account.</p>
              <a href="/evidence/snail-kite-critical-habitat.png" target="_blank" rel="noreferrer" aria-label="Open the full-resolution Everglade snail kite critical habitat map"><img src="/evidence/snail-kite-critical-habitat.png" alt="Central and southern peninsular Florida with designated critical habitat in dark red, including areas along Lake Okeechobee and inland from southeastern coastal cities. A detailed description and credits follow." width={2400} height={1500} loading="lazy" /></a>
              <p className="habitat-key"><span aria-hidden="true" /> Dark red: final designated critical habitat</p>
              <figcaption><strong>Everglade snail kite critical habitat in Florida.</strong> Static rendering of the map accompanying my Spring 2026 StoryMap. I selected the species-specific view and composed the map and story; the underlying habitat boundaries are USFWS data. This export uses the source services available when rendered and is not a frozen April 2026 dataset snapshot.</figcaption>
              <details className="evidence-description"><summary>Map description and source credits</summary><p>Dark red areas show designated critical habitat over a beige land and pale blue water basemap. Highlighted areas appear along part of Lake Okeechobee, inland wetlands west of the southeastern coastal cities, and smaller inland patches farther north. Unshaded areas do not establish that the species is absent or that habitat is unsuitable.</p><p>Critical habitat data: U.S. Fish and Wildlife Service, shared by Esri_US_Federal_Data under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution 4.0</a>, filtered to the Everglade snail kite. Basemap credits printed in the image include Esri, TomTom, Garmin, FAO, NOAA, USGS, OpenStreetMap contributors, the GIS User Community, and CGIAR. <a href="/evidence/snail-kite-evidence-notes.txt">Read the complete evidence and attribution notes</a>.</p></details>
              <div className="evidence-links"><a className="text-link" href="/evidence/snail-kite-critical-habitat.png" download>Download map evidence <ArrowDown size={17} /></a><a className="text-link" href="https://storymaps.arcgis.com/stories/651b5e42fbf14de0bf85e3101c221870" target="_blank" rel="noreferrer">Read the original StoryMap <ArrowUpRight size={17} /></a></div>
              
            </figure>
          </ProjectDisclosure>

          <ProjectDisclosure id="church-atlas-project" number="03" category="WEB MAPPING / PROTOTYPE" title="Church Atlas"
            description="A geographic search interface for exploring sample church listings, comparing profiles, and planning a visit."
            cover="/images/church-atlas-cover.jpg" coverAlt="Church Atlas interface with location and denomination filters, a map of sample listings, and nearby church cards."
            tags={['JavaScript', 'Leaflet', 'Web GIS', 'Interface design']}>
            <div className="prototype-overview"><h4>Exploring communities through location</h4><p>Church Atlas combines an interactive map with structured filters to help visitors explore sample church listings. Users can search an area, adjust a geographic radius, filter by denomination and visit needs, compare profiles, and save favorites and a visit plan in their browser.</p><p><strong>Skills demonstrated:</strong> Geographic filtering, organizing categorical data, JavaScript interface development, and building an interactive web map with Leaflet.</p><a className="primary-link" href="/church-atlas/">Open Church Atlas demo <ArrowUpRight size={19} /></a><p className="project-note">The prototype uses sample listings and illustrative source-status labels. Favorites and visit plans are stored locally in the browser.</p><h4>Evidence</h4><p>The cover screenshot shows the actual prototype’s filters, sample markers, search radius, and results. Interface by Cole Jorgensen; map rendered with Leaflet, © OpenStreetMap contributors. The application source is stored in my personal GitHub repository.</p><p><a className="text-link" href="/images/church-atlas-cover.jpg" target="_blank" rel="noreferrer">View full screenshot <ArrowUpRight size={17} /></a></p></div>
          </ProjectDisclosure>

          <ProjectDisclosure id="jobfinder-project" number="04" category="PYTHON / PROTOTYPE" title="JobFinder"
            description="A location-aware job-search prototype with map exploration, search filters, and commute and job-fit information."
            cover="/images/jobfinder-cover.jpg" coverAlt="JobFinder prototype map showing sample job markers and geographic search controls."
            tags={['Python', 'Streamlit', 'GIS', 'Application development']}>
            <div className="prototype-overview"><h4>The job search, with location in focus</h4><p>JobFinder is a Python and Streamlit prototype for exploring jobs on a map, narrowing results with filters, and comparing opportunities with commute and job-fit information.</p><p><strong>Skills demonstrated:</strong> Python application development, location-based information design, and turning search criteria into an interactive workflow.</p><a className="primary-link" href={demo} target="_blank" rel="noreferrer">Open JobFinder demo <ArrowUpRight size={19} /></a><p className="project-note">Prototype with demonstration data. Opens on Streamlit; the free demo may need to wake after inactivity.</p><h4>Evidence</h4><p>The cover screenshot records the running prototype’s map interface with sample job locations. The screenshot is stored on my personal portfolio so it remains viewable when the demo is asleep. Application by Cole Jorgensen; map attribution appears in the screenshot and includes CARTO and OpenStreetMap contributors.</p><p><a className="text-link" href="/images/jobfinder-cover.jpg" target="_blank" rel="noreferrer">View full screenshot <ArrowUpRight size={17} /></a></p></div>
          </ProjectDisclosure>
        </div>

      </section>


      <section id="connect" className="connect wrap" aria-labelledby="connect-title"><div><div className="eyebrow">LET’S CONNECT</div><h2 id="connect-title">Connect</h2><p>Interested in GIS, web mapping, or spatial application development? Visit my GitHub profile to explore my portfolio repository and connect with my work.</p></div><a className="primary-link" href="https://github.com/colejorgensen28" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={19} /></a></section>
    </main>
    <footer className="footer wrap"><div><strong>Cole Jorgensen</strong><p>Maps, software, and stories.</p></div><a href="#home">Back to home <ArrowUpRight size={17} /></a></footer>
  </>;
}
