import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import CreateProjects from './CreateProjects';
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
            <LoginModal 
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            />
            <SignupModal
            show={signupShow}
            handleClose={handleSignupClose}
            handleShow={handleSignupShow}
            />

          
        </>
    );
    
}

export default Home;