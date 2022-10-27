import { useParams } from 'react-router-dom'
import React, {useEffect, useState} from "react";
import Images from './Images';
import { useHistory } from 'react-router-dom'
import './Project.css'
import NavigationBar from "./NavigationBar";
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';



function Project(){
    const { id } = useParams()
    const [ project, setProject ] = useState([])
    const [ userData, setUserData ] = useState({username: "", project_id: id})
    const [ errors , setErrors] = useState([])
    const [ collaborators, setCollaborators ] = useState([])
    const [ showCollab, setShowCollab ] = useState(false)
    const [ images, setImages ] = useState([])
    const history = useHistory()
    const [colors, setColors] = useState ({red: "", green: "", blue: ""})
    const [colorBox, setColorBox] = useState("#D3D3D3")
    const [userProjects, setUserProjects] = useState([])
    
       
            document.documentElement.style.setProperty('--color-one', project.red )
            document.documentElement.style.setProperty('--color-two', project.green )
            document.documentElement.style.setProperty('--color-three', project.blue ) 
       
   
    useEffect(() => {
        fetch(`/projects/${id}`)
        .then(res => res.json())
        .then(project => {
        setProject(project)
        
        setCollaborators(project.users)
        setImages(project.images)
        setUserProjects(project.user_projects)
        })
      }, [])

    function editColor (e) {
        setColorBox(e.target.value)
        var compColors = require('complementary-colors');
         const chosenColor = new compColors(e.target.value)
         const colorArray = chosenColor.primary()
         const c = colorArray[0] 

        setColors({red: c.r, green: c.g, blue: c.b})
    }

    function handleCollabClick(){
        setShowCollab(!showCollab)
    }

    function patchColor () {
            fetch(`/projects/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json" 
                    },
                    body: JSON.stringify(colors)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setColors({red: data.red, green: data.green, blue: data.blue})
                    window.location.reload(true);
        })
               
        }

        console.log(colors)
    
    
      const updateImages = (image) => {
        setImages([...images, image])
      }

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




    function handleCollabRemove(user){
        const  filteredUserProjects = userProjects.filter((userProject) => userProject.user_id === user.id)
        const deletedProject = filteredUserProjects[0]
                fetch(`/user_projects/${deletedProject.id}`,{
                    method : "DELETE"
                }) 
                setCollaborators(collaborators.filter(item => item.id !== deletedProject.user_id))               
            }

    function handleLogout(){
        history.push(`/`)
    }
    function handleDelete(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(data => {console.log(data)
        handleLogout()})
    }

    return(
        <div className = "projectCont">
        <div>
            <div className='nav-bar'>
                <NavigationBar handleDelete={handleDelete}/>
            </div>
            {/* <div> <img className ="navImage" src ="https://i.postimg.cc/7PRHmXfx/Visualize-logo.png"/> </div> */}
            <div className = "topPage">
            <div class="head">
                <button id="delete" class = "btn-primary" onClick={() => deleteProject(project.id)}>Delete</button> 
            </div>
            <h5 className='description'>{project.description}</h5>
            <h1 className = "heading">{String(project.name).toUpperCase()}</h1>
            <div>
                <Images images={images} projectId={project.id} updateImages={updateImages}/>
            </div>
            </div>
            <div className= "bottomPage">
            <button class = "btn-primary" onClick={handleCollabClick}>Add Collaborators</button>
            <div>
                {showCollab ?
                <div>  
                    <form className="collab-form" onSubmit={handleSubmit}>
                        <input type="text" id="collab-input" name="username" value={userData.username} onChange={handleChange} placeholder="Username"/>
                        <input type="submit" id="add-collab" value="Add"/>
                    </form>
                    {errors.map((err) => (
                        <p key={err} style={{ color: "red" }}>
                            {err}
                        </p>
                    ))}
                </div>
                : null }
            </div>
            <div className = "descript">
            
            <p>Collaborators: </p>{collaborators.map((user) => 
            { return(<>
               <p >{` ${user.username} `}</p>
               <CloseButton onClick={() => handleCollabRemove(user)}/>
                </>)})}
            
            </div>
            <div className = "colorDelete">
                
                <input onChange = {editColor} type="color" id ="input" name = "color" value={colorBox}  className="color" ></input>
                <button class = "btn-primary" onClick={patchColor}> Edit Color </button>
               
            </div>
        </div>
        </div>
        </div>
    )
}


export default Project;