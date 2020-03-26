// import { connect } from 'react-redux'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Row,Col} from 'react-bootstrap';

class Formcomp extends Component {
  render() {
    debugger

    return (<div>
    <h3> Login Page</h3>
    <Form>
  <Row>
    <Col>
     First Name <Form.Control placeholder="" />
    </Col></Row>
    <Row>
    <Col>
     Last Name <Form.Control placeholder="" />
    </Col>
  </Row>
 Age <input type="text"></input>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
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
    <Form.Control placeholder="1234 Main St" />
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
 

    </div>

    );
  }
}
    
  
export default Formcomp;
