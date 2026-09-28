import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title"></h2>

      {experience.map((job) => (
        <div className="job" key={job.id}>
          <div className="job-date">{job.date}</div>
          <div>
            <p className="job-title">{job.title}</p>
            <p className="job-org">
              {job.org}
              <span className="sep">·</span>
              {job.type}
            </p>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="tags">
              {job.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <a className="resume-link" href="#">
        Download and view my full résumé <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
