import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then(r => r.json())
            .then(data => setProjects(data.projects))
    }, [])
    
    const projectItems = projects.map((project) => (
        <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
        />
    ));
    
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div id="project-list">{projectItems}</div>
        </section>
    );
}

export default ProjectList;
