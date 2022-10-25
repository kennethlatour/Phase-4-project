import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal({handleShow, show, handleClose}){




    return( <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="email-address">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email-address">
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


export default LoginModal;