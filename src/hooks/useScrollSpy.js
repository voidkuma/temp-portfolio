import { useEffect, useState } from "react";

// A "custom hook" is just a regular function that uses other hooks
// (useState, useEffect) and that you can reuse across components.
// This one watches the page scroll position and tells you which
// section id is currently in view, so the sidebar nav + photo can
// react to it.
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      const pos = window.scrollY + 120;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          current = id;
        }
      }
      setActiveId(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount so the first section is correct immediately

    // Cleanup function: React runs this when the component unmounts,
    // so we don't leave a dangling scroll listener behind.
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return activeId;
}
