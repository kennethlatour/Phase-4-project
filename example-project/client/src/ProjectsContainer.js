import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import CreateProjects from "./CreateProjects";
import Projects from "./Projects";
import "./ProjectsContainer.css"


function ProjectsContainer(){
    const [ projects, setProjects ] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetch("/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    function handleCardClick(id) {
        history.push(`projects/${id}`)
      }
    

    const showProjects = projects.map((project) => (
        <Projects key={project.id} project={project} handleCardClick={handleCardClick}/>
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