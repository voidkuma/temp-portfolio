import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTION_IDS = ["about", "experience", "projects"];

export default function App() {
  // This one hook call replaces the vanilla-JS scroll listener from the
  // plain-HTML version. `activeId` updates automatically as the user
  // scrolls, and every component that needs it just reads it as a prop.
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <div className="wrap">
      <Sidebar activeId={activeId} />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
