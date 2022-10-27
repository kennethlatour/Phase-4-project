import { useState } from "react"
import { useParams } from 'react-router-dom'
import './Project.css'
import './Images.css'

export default function Images ({images, updateImages}) {
    const { id } = useParams()
    const [ imageData, setImageData ] = useState({url: "", description: "", project_id: id})
    const [ showAddImage, setShowAddImage ] = useState(false)

    const handleChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setImageData({...imageData, [name]: value })
    }

    const submitImage = (event) => {
        event.preventDefault()
        fetch("/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(imageData)
        })
        .then((res) => res.json())
        .then((data) => {
            updateImages(data)
            setImageData({url: "", description: "", project_id: id})
            console.log(data)
            setShowAddImage(false)
        })
    }

    return (
        <div className='image-div'>
             <div className="image-container">
                {images.map((image) => (
                    <img class = "images" src={image.url}/>
                ))}
            </div>
            <div className="add-images">
            <button class = "btn-primary" onClick={()=>setShowAddImage(true)}>Add Images</button>
            {showAddImage ?
            <div>
            <form className="add-images-form"onChange={handleChange} onSubmit={submitImage}>
                <input  className="add-img-input" type="text" name="url" value={imageData.url} placeholder="URL"/>
                <input className="add-img-input" type="text" name="description" value={imageData.description} placeholder="Description"/>
                <input type="submit" id="submit" value="Add"/>
            </form>
            </div>
            : null
            }
            </div>
        </div>
    )
}