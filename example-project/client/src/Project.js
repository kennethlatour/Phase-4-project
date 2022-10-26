import { useParams } from 'react-router-dom'
import React, {useEffect, useState} from "react";

function Project(){
    const { id } = useParams()
    const [ projects, setProjects ] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:9292/projects/${id}`)
        .then(res => res.json())
        .then(projects => {
        setProjects(projects)
        })
      }, [])

    return(
        <div>
            
        </div>
    )
}


export default Project;