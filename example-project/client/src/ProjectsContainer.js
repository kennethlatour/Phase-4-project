import { useEffect, useState } from "react";
import CreateProjects from "./CreateProjects";
import Projects from "./Projects";
import "./ProjectsContainer.css"


function ProjectsContainer(){
    const [ projects, setProjects ] = useState([])
   


    useEffect(() => {
        fetch("/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    const showProjects = projects.map((project) => (
        <Projects key={project.id} project={project}/>
    ))

  return(
        <div>
            <div className="projects">
            {showProjects}
            </div>
           
            <CreateProjects />
        </div>
    )
}

export default ProjectsContainer;