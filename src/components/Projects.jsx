import { projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      {projects.map((project) => (
        // The whole card is one <a> tag — that's what makes the entire
        // thing clickable, not just the title. See ".project:hover" in
        // index.css for the border + "View →" hover state.
        <a className="project" href={project.url} key={project.id}>
          <ProjectVisual accent={project.accent} />
          <div>
            <div className="project-head">
              <p className="project-name">{project.name}</p>
              <span className="project-view">
                View<span aria-hidden="true">→</span>
              </span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}

      <a className="view-all" href="#">
        View full projects page <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
