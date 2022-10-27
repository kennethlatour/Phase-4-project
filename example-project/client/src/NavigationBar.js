import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './App.css';

function NavigationBar({handleDelete}){
const history = useHistory()


    return(
        <div className= "nav">
            <img className ="navImage" src = 'https://i.postimg.cc/7PRHmXfx/Visualize-logo.png' onClick={() => history.push('/projects')} />
           <Button variant="primary" onClick={handleDelete}>
          Logout
        </Button>
        </div>
    )

}


export default NavigationBar;