import { useParams } from 'react-router-dom'
import React, {useEffect, useState} from "react";

function Project(){
    const { id } = useParams()
    const [ project, setProject ] = useState([])
    const [ userData, setUserData ] = useState({username: "", email: ""})
    // const [ showCollab, setShowCollab ] = useState([])
   
    useEffect(() => {
        fetch(`/projects/${id}`)
        .then(res => res.json())
        .then(project => {
        setProject(project)
        })
      }, [])

     const handleChange = () => {
        
     }

    return(
        <div>
           <button>Add Collaborators</button>
           <div>
            <form onChange={handleChange}>
                <input type="text" name="username" value={userData.username} placeholder="Username"/>
                <input type="submit" value="Add"/>
            </form>
           </div>
        </div>
    )
}


export default Project;