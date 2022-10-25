import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function SignupModal({handleShow, show, handleClose}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    function handleSubmit(e){
    e.preventDefault()

    const userData = {
        username : username,
        password : password,
        email : email
    }

    fetch('/users', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(userData),
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
}
    return(
    <> 
    <Button variant="primary" onClick={handleShow}>
    Sign up
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create Account</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="email-address">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@account.com"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>  
         <Button variant="primary" type="submit" >
        Login
      </Button>
      </Form>
      
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" type="submit" onSubmit={(e) => handleSubmit(e)}>
        Login
      </Button>
    </Modal.Footer>
  </Modal>
</>


    )
}


export default SignupModal;