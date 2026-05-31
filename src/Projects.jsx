import "./Projects.css";
export default function Projects({ projects }) {
  return (
    <div className="project">
      {projects.map((project) => (
        <a className="project__link" href={project.link}>
          <img src={project.image}></img>
          <h2 className="project__title">{project.title}</h2>
          <p className="project__description">{project.description}</p>
          <div className="project__langs">
            {project.langs.map((lang) => (
              <button className="project__lang">{lang}</button>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
