import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ id, name, about, technologies }) {
  const technologiesList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesList}</div>
      <Link to={`/projects/${id}`}>See more</Link>
    </div>
  );
}

export default ProjectItem;
