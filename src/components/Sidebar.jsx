import reiPhoto from "../assets/rei-photo.png";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

// Small inline placeholder graphics for the sections that don't have a
// real photo. Swap these for actual images whenever you have them —
// just add a new <img> and give it the matching data-section id logic
// (see how `activeId` is used below).
const PLACEHOLDER_ICONS = {
  experience: (
    <svg viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#171b22" />
      <circle cx="100" cy="76" r="34" fill="none" stroke="#38c6b4" strokeWidth="2.5" />
      <rect x="60" y="120" width="80" height="52" rx="6" fill="none" stroke="#38c6b4" strokeWidth="2.5" />
      <line x1="100" y1="120" x2="100" y2="98" stroke="#38c6b4" strokeWidth="2.5" />
      <circle cx="80" cy="146" r="4" fill="#38c6b4" />
      <circle cx="100" cy="146" r="4" fill="#38c6b4" />
      <circle cx="120" cy="146" r="4" fill="#38c6b4" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 200 200">
      <rect width="200" height="200" fill="#171b22" />
      <circle cx="100" cy="100" r="46" fill="none" stroke="#8f8bff" strokeWidth="2.5" />
      <path d="M70 100 L92 122 L132 78" fill="none" stroke="#8f8bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// `activeId` is passed down from App.jsx (which gets it from useScrollSpy).
// This is "props" — the main way data flows from a parent component to a child.
export default function Sidebar({ activeId }) {
  return (
    <aside className="sidebar">

      <h1 className="name">Rei Hernandez</h1>
      <p className="role">Data Analyst & Developer</p>
      <p className="tagline">
        I build clear, accessible interfaces — and I care about why they work, not just that they do.
      </p>

      {/* <div className="photo-frame">
        <img
          className={`photo-img ${activeId === "about" ? "active" : ""}`}
          src={reiPhoto}
          alt="Portrait of Rei Hernandez"
        />
        <div className={`photo-img placeholder ${activeId === "experience" ? "active" : ""}`}>
          {PLACEHOLDER_ICONS.experience}
        </div>
        <div className={`photo-img placeholder ${activeId === "projects" ? "active" : ""}`}>
          {PLACEHOLDER_ICONS.projects}
        </div>
      </div> */}

      <nav className="sidenav">
        {/* .map() turns our SECTIONS array into a list of <a> elements.
            This is the React way to render a list — no copy/pasting three
            nearly-identical links by hand. */}
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={activeId === s.id ? "active" : ""}>
            <span className="dot" />
            {s.label}
          </a>
        ))}
      </nav>

      <div className="socials">
        <a href="https://github.com/voidkuma" target="_blank" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/rei-hernandez/" target="_blank" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
          </svg>
        </a>
        {/* <a href="#" target="_blank" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
            <path d="M3 6l9 7 9-7" />
          </svg>
        </a> */}
      </div>
    </aside>
  );
}
