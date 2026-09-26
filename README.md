# Rei Hernandez — Portfolio

A personal portfolio site built with React + Vite.

## Project structure

```
src/
  main.jsx              entry point — mounts <App /> into the page
  App.jsx                top-level layout, wires the sections together
  index.css              all styles + design tokens (colors, fonts)
  components/
    Sidebar.jsx           photo, name, nav, social links
    About.jsx              intro/bio section
    Experience.jsx         renders data/experience.js as a timeline
    Projects.jsx            renders data/projects.js as clickable cards
    ProjectVisual.jsx       small reusable colored graphic per project
    Footer.jsx
  data/
    experience.js           your job history — edit this, not the component
    projects.js              your projects — edit this, not the component
  hooks/
    useScrollSpy.js          tracks which section is in view while scrolling
  assets/
    rei-photo.png
```

**To update your content:** edit `src/data/experience.js` and
`src/data/projects.js`. You shouldn't need to touch the component files
for routine updates like adding a job or a project.

## Running it locally

```bash
npm install     # only needed once, or after pulling new dependencies
npm run dev     # starts a local server, usually at http://localhost:5173
```

## Building for production

```bash
npm run build   # outputs a static site into dist/
npm run preview # serves the dist/ build locally, so you can sanity-check it
```
