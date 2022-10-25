
import './ColorGenerator.css'

function ColorGenerator(){


function handleChange (e) {
    var compColors = require('complementary-colors');
    const color = new compColors(e.target.value)
    const setOfColors = color.square()
    console.log(setOfColors)
    const first = setOfColors[1]
    const firstColor= first.r
    document.documentElement.style.setProperty('--color-one', firstColor )
    const secondColor= first.g
    document.documentElement.style.setProperty('--color-two', secondColor )
    const thirdColor = first.b
    document.documentElement.style.setProperty('--color-three', thirdColor )
   
}
    
    return(
        <div>
            <div>
            <label for="input">Select Color:</label>
            <input onChange ={handleChange} type="color" id ="input" name = "color"  className="color" ></input>
            </div>
            <div className="color" id = "color2" >

            </div >
            <div className= "color" id = "color3" >

            </div>
        </div>
        
    )
}

export default ColorGenerator;