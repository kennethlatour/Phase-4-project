import { useState } from "react"

export default function Images () {
    const [ images, setImages ] = useState([])


    return (
        <div>
            <button>
                Add Image
            </button>
            <div className="image-container">
                
            </div>
        </div>
    )
}