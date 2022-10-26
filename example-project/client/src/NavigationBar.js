import Button from 'react-bootstrap/Button';
import './App.css';

function NavigationBar({handleDelete}){



    return(
        <div className= "nav">
            <img id ="navImage" src = 'https://i.postimg.cc/7PRHmXfx/Visualize-logo.png' />
           <Button variant="primary" onClick={handleDelete}>
          Logout
        </Button>
        </div>
    )

}


export default NavigationBar;