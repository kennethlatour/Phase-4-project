import Button from 'react-bootstrap/Button';

function NavigationBar({handleDelete}){



    return(
        <div>
           <Button variant="primary" onClick={handleDelete}>
          Logout
        </Button>
        </div>
    )

}


export default NavigationBar;