// This is a small, reusable "presentational" component: it takes one prop
// (`accent`) and decides what to render from it. Reusable pieces like this
// are one of the biggest wins React gives you over plain HTML/CSS.
const ACCENTS = {
  blue: "#5b8cff",
  teal: "#38c6b4",
  violet: "#8f8bff",
};

export default function ProjectVisual({ accent = "blue" }) {
  const color = ACCENTS[accent];

  return (
    <div className="project-visual">
      <svg viewBox="0 0 200 140" preserveAspectRatio="none">
        <rect width="200" height="140" fill="#171b22" />
        <circle cx="150" cy="30" r="70" fill={color} opacity="0.16" />
        <circle cx="40" cy="110" r="46" fill={color} opacity="0.28" />
        <line x1="0" y1="140" x2="200" y2="0" stroke={color} strokeWidth="0.6" opacity="0.3" />
      </svg>
    </div>
  );
}
