import Project from "./Project";
import ColorGenerator from "./ColorGenerator";
import { useEffect, useReducer, useState } from "react";
import './Projects.css'

function Projects({project, handleCardClick}){

  
    //move into project page
    // const deleteProject = (id) => {
    //     fetch(`/projects/${id}`, {
    //         method: "DELETE",
    //     })
    // }   

   const projectContributers = project.users.map((user) => <p>{user.username}</p>)

    return(
        <li onClick={() => handleCardClick(project.id)} className="project">
            <h3 className = "header">{project.name}</h3>
            <img id = "img" src={project.thumbnail} alt="thumbnail"/> 
            <p>{project.description}</p> 
            {/* <p>Contributers: {projectContributers}</p>  */}
          
            {/* <button onClick={() => deleteProject(project.id)}>Delete</button> */}
        </li>
    )
}

export default Projects;