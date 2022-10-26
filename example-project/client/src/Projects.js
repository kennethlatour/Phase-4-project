import Project from "./Project";
import ColorGenerator from "./ColorGenerator";
import { useEffect, useReducer, useState } from "react";
import './Projects.css'

function Projects({project, handleCardClick}){

  



   const projectContributers = project.users.map((user) => <p>{user.username}</p>)

    return(
        <div  onClick={() => handleCardClick(project.id)} className="project">
            
            <h2 className = "header">{project.name} </h2>
            <img id = "img" src={project.thumbnail} alt="thumbnail"/> 
            <p>{project.description}</p> 
            {/* <p>{project.description}</p> 
            <p>Contributers: {projectContributers}</p>  */}
          
            
        </div>
    )
}

export default Projects;