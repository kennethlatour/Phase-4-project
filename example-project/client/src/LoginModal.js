import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal({handleShow, show, handleClose}){
  const [ loginData, setLoginData ] = useState({username: "", password: ""})

  const handleOnChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    setLoginData({...loginData, [name]: value})
  }

  const handleOnSubmit = () => {
    fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  }


    return( <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
       
          </Modal.Footer>
        </Modal>
      </>



    )
}


export default LoginModal;