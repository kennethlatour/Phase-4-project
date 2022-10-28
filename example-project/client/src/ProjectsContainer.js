import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import CreateProjects from "./CreateProjects";
import NavigationBar from "./NavigationBar";
import Projects from "./Projects";

import "./ProjectsContainer.css"


function ProjectsContainer({currentUser}){
    const [ projects, setProjects ] = useState([])
    const history = useHistory();


    function handleLogout(){
        history.push(`/`)
    }

    useEffect(() => {
        fetch("/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    function handleDelete(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(data => {console.log(data)
        handleLogout()})
    }

    function handleCardClick(id) {
        history.push(`projects/${id}`)
      }
    

    const showProjects = projects.map((project) => (
        <Projects project={project} handleCardClick={handleCardClick}/>
    ))

  return(
        <div className="project-container">
            <NavigationBar handleDelete={handleDelete}/>
          
            <div className="projects">
            {showProjects}
            </div>
           <div className="create-project">
                <CreateProjects currentUser={currentUser} setProjects={setProjects} projects={projects}/>
           </div>
            
        </div>
    )
}

export default ProjectsContainer;