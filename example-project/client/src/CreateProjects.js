import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import './App.css'
import "./CreateProjects.css"
import Projects from './Projects';

function CreateProjects ({currentUser, projects, setProjects}){
    const [ formData, setFormData ] = useState({name: "", description: "", thumbnail: "", red: "", green: "", blue: ""})
    const [colorBox, setColorBox] = useState("#D3D3D3")
    console.log(currentUser)

    function handleChange (e) {
        setColorBox(e.target.value)
        var compColors = require('complementary-colors');
         const chosenColor = new compColors(e.target.value)
         const colorArray = chosenColor.primary()
         const color = colorArray[0] 
        
        setFormData({...formData,  red: color.r, green: color.g, blue: color.b})
    }

    const handleFormChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setFormData({...formData, [name]: value})
    }


    
    const handleFormSubmit = (event) => {
        event.preventDefault()
       
        let id 
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            id = data.id
            const userProject = {
                project_id: id,
                username: currentUser.username
            }
            fetch("/user_projects", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(userProject)
            })
            .then((res) => res.json())
            .then((res) => {
                window.location.reload(true);
            })
        })

    }

    console.log(projects)


    return(
        <div className="project-form-page">
           
            <Form className="project-form" onSubmit={handleFormSubmit}>
            <h2>Build a Visual</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Project name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3}  name="description" value={formData.description} onChange={handleFormChange} placeholder="Project description"/>
                 </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type="text" name="thumbnail" value={formData.thumbnail} onChange={handleFormChange} placeholder='Thumbnail'/>
                </Form.Group>
                <Form.Group className="mb-3" id="color-gen">
         
                <Form.Group>
                    <label for="input"> <p>Color Picker</p> </label>
                    <Form.Control onChange = {handleChange} type="color" id ="input" value={colorBox} className="color"/>
                </Form.Group>
                <FormGroup>
                    <Button id = "create" variant="primary" type="submit">
                        <h2>Create</h2>
                    </Button>
                </FormGroup>
       
                </Form.Group>
             
               
            </Form>
        </div>
    )
}


export default CreateProjects;