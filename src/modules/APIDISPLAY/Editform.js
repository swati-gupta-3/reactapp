import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";


const EditForm = props => {
 const  { handleSubmit, reset } =props;
 console.log(props)
  
  return (
    <Container>
      <Row>
        <Col></Col>

        <Col xs={3}>
          <Form border={1} onSubmit={handleSubmit}>
            <div>
              <table>
                <FormGroup>
                                   <tr>
                                   <label>Name</label>
                    
                    <Field
                      component="input"
                      label="Name"
                      type="text"
                      name="name"
                      value={props.name}
                      onChange={props.changeName}
                    
                    />
                  </tr>
                
                </FormGroup>
                <FormGroup>
                 
                  <tr>
                    <label>Address</label>
                    <br />
                    <Field
                      component="input"
                      label="Address"
                      name="address"
                      type="text"
                      value={props.address}
                      onchange={props.changeAddress}
                    />
                  </tr>
                 
                </FormGroup>
                <FormGroup>
                  
                  <tr> <label>PhoneNo</label>
                    <br />

                    <Field
                      component="input"
                      label="phoneNo"
                      name="phoneNo"
                      type="text"
                      value={props.phoneNo}
                      onChange={props.changePhoneNo}
                    />
                  </tr>
                </FormGroup>
                <FormGroup>
                
                  <tr>
                  <label>Country</label>
                    <br />
                    <Field
                      component="input"
                      label="Country"
                      name="country"
                      type="text"
                      value={props.country}
                      onChange={props.changeCountry}
                    />
                  </tr>
                                 </FormGroup>

               
                <div>
                  <tr>
                    <Button variant="primary" type="submit" size="lg">
                      Submit
                    </Button>
                    <Button
                      variant="secondary"
                      type="Button"
                      onClick={reset}
                      size="lg"
                    >
                      Reset
                    </Button>
                  </tr>
                </div>
              </table>
            </div>
          </Form>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );

 };

export default reduxForm({
  form: "storing",

})(EditForm);
