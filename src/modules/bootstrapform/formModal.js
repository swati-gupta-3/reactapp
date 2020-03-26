import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,Col,Row,Form} from 'react-bootstrap';

import { useState } from 'react';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <Button variant="primary" onClick={handleShow}>
          Launch modal
        </Button>
       
        <Modal show={show} onHide={handleClose}>
        <h3> Login Page</h3>
    <Form>
  <Row>
    <Col>
     First Name <Form.Control placeholder="" required/>
    </Col></Row>
    <Row>
    <Col>
     Last Name <Form.Control placeholder="" required/>
    </Col>
  </Row>
 Age <input type="text" required></input>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2} required>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Col>
    </Form.Group>
  </fieldset>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" required />
  </Form.Group>

  
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
        </Modal>
</>
    );
  }
  

export default Example;