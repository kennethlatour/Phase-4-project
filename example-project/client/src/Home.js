import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import CreateProjects from './CreateProjects';
import './App.css'
function Home(){
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignupShow = () => setSignupShow(true)
    const handleSignupClose = () => setSignupShow(false);
//Will have a signup and login modal
return (
    <>
    <div id = "login">
        <div class = "vertical-center">
        <SignupModal
        show={signupShow}
        handleClose={handleSignupClose}
        handleShow={handleSignupShow}
        handleLogin={handleLogin}
        />
        <div class = "vertical-center">
        <LoginModal 
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleLogin={handleLogin}
        />
        </div>
        
        </div>
    </div>
      
    </>
);

}

export default Home;