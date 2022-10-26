import { useParams } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import Photos from './Photos';
import { useHistory } from 'react-router-dom'

function Project(){
    const { id } = useParams()
    const [ project, setProject ] = useState([])
    const [ userData, setUserData ] = useState({username: "", project_id: id})
    const [ errors , setErrors] = useState([])
    const [ collaborators, setCollaborators ] = useState([])
    const [ showCollab, setShowCollab ] = useState(false)
    const history = useHistory()
    // const [ showCollab, setShowCollab ] = useState([])
   
    useEffect(() => {
        fetch(`/projects/${id}`)
        .then(res => res.json())
        .then(project => {
        setProject(project)
        
        // project.users.map((user) => {
           
        //     setCollaborators([...collaborators, user.username])
        //     console.log(user.username)
        // })
        setCollaborators(project.users)
        })
      }, [])

      console.log(collaborators)
      

     const handleChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setUserData({...userData, [name]: value})
     }



     async function handleSubmit (event) {
        event.preventDefault()
       
        const response = await fetch('/user_projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        if (response.ok){
            console.log("Collab created:", data);
            setErrors([])
           
            let newUser = { username: userData.username}
            setCollaborators([...collaborators, newUser])
            setUserData({...userData})
            setShowCollab(false)
        } else {
          setErrors(data.errors);
        }

     }

     const deleteProject = (id) => {
        fetch(`/projects/${id}`, {
            method: "DELETE",
        }).then((res) => {
            history.push('/projects')
        })
    }   

    return(
        <div>
            <p>Collaborators:{collaborators.map((user) => `${user.username} `)}</p>
            <button onClick={() => setShowCollab(true)}>Add Collaborators</button>
            <div>
                {showCollab ?
                <div>  
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username"/>
                        <input type="submit" value="Add"/>
                    </form>
                    {errors.map((err) => (
                        <p key={err} style={{ color: "red" }}>
                            {err}
                        </p>
                    ))}
                </div>
                : null }
            </div>
            <div>
                <Photos />
            </div>
            <div>
                <button onClick={() => deleteProject(project.id)}>Delete</button> 
            </div>
        </div>
    )
}


export default Project;