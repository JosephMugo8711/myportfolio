import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ProjectDetail() {
    const [project, setProject] = useState(null);
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:3000/projects${id}`)
            .then(r => r.json())
            .then(data => setProject(data.project))
    }, [id])
    
    if (!project) return <h2>Loading...</h2>
    
    const { name, about, technologies } = project
    
    const technologiesList = technologies.map((tech) => (
        <span key={tech}>{tech}</span>
    ));
    
    return (
        <section>
            <div className="project-item">
                <h1>{name}</h1>
                <p>{about}</p>
                <div className="technologies">{technologiesList}</div>
            </div>
        </section>
    );
}

export default ProjectDetail;
