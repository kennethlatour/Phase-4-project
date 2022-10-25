import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function SignupModal({handleShow, show, handleClose}){


    return(
    <> 
    <Button variant="primary" onClick={handleShow}>
    Create Account
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create Account</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="email-address">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@account.com"
            autoFocus
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="username"
            placeholder="Password"
            autoFocus
          />
        </Form.Group>
      
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Login
      </Button>
    </Modal.Footer>
  </Modal>
</>


    )
}


export default SignupModal;