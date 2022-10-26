import { useState } from "react"
import { useParams } from 'react-router-dom'
import './Project.css'

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
        <div>
            <button class = "btn-primary" onClick={()=>setShowAddImage(true)}>Add Images</button>
            {showAddImage ?
            <div>
            <form onChange={handleChange} onSubmit={submitImage}>
                <input type="text" name="url" value={imageData.url} placeholder="URL"/>
                <input type="text" name="description" value={imageData.description} placeholder="Description"/>
                <input type="submit" value="Add"/>
            </form>
            </div>
            : null
            }

            <div className="image-container">
                {images.map((image) => (
                    <img class = "images" src={image.url}/>
                ))}
            </div>
    
        </div>
    )
}