import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import CreateProjects from './CreateProjects';
import { useHistory } from "react-router-dom";
import './App.css'
function Home( { handleLogin } ){
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignupShow = () => setSignupShow(true)
    const handleSignupClose = () => setSignupShow(false);
//Will have a signup and login modal
    return (
        <>
        <div className= "overlay" id = "login">
            <div className = "vertical-center">
            <SignupModal
            show={signupShow}
            handleClose={handleSignupClose}
            handleShow={handleSignupShow}
            handleLogin={handleLogin}
            />
            <div className= "vertical-center">
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