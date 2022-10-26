import { useState } from "react"

export default function Images ({images}) {
    const [ photoData, setPhotoData ] = useState([])

    const handleChange = () => {
        
    }
    return (
        <div>
            <form onChange={handleChange}>
                <input type="text" name="url" placeholder="URL"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="submit" value="Add"/>
            </form>
            <div className="image-container">
                {images.map((image) => (
                    <img src={image.url}/>
                ))}
            </div>
        </div>
    )
}