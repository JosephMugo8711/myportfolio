import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const technologyList = ["React", "Redux", "Rails", "JavaScript"];

function NewProject() {
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [technologies, setTechnologies] = useState([]);
    
    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            project: { name, about, technologies }
        }
        fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                // redirect /projects/:id
                history.push(`http://localhost:3000/projects${data.project.id}`)
            })
    }
    
    const checkboxes = technologyList.map(tech => {
        const label = tech.toLowerCase()
        const checked = technologies.includes(tech)
        function handleChange(e) {
            if (e.target.checked) {
                setTechnologies(technologies => [...technologies, tech])
            } else {
                setTechnologies(technologies => technologies.filter(t => t !== tech))
            }
        }
        return (
            <div key={tech}>
                <input 
                    type="checkbox" 
                    name={label} 
                    id={label} 
                    checked={checked} 
                    onChange={handleChange} 
                />
                <label htmlFor={label}>{tech}</label>
            </div>
        )
    })
    
    return (
        <section id="form">
            <h3>Add new project</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                
                <label htmlFor="about">About:</label>
                <textarea id="about" value={about} onChange={e => setAbout(e.target.value)} />
                
                <fieldset>
                    <legend>Technologies</legend>
                    {checkboxes}
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default NewProject