import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Container, Row, Col, FormGroup } from "react-bootstrap";
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.phoneNo) {
    errors.phoneNo = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  return errors;
};
const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} />
      {touched && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

const EditForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <Container>
      <Row>
        <Col></Col>

        <Col xs={3}>
          <Form onSubmit={handleSubmit}>
            <div>
              <table>
                <FormGroup>
                  <tr>
                    <Field
                      component={renderField}
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
                    <Field
                      component={renderField}
                      label="Address"
                      name="address"
                      type="text"
                      
                      value={props.address}
                      onChange={props.changeAddress}

                    />
                  </tr>
                </FormGroup>
                <FormGroup>
                  <tr>
                    <Field
                      component={renderField}
                      label="PhoneNo"
                      name="phoneNo"
                      type="text"
                      value={props.phoneNo}
                      
                      onChange={props.changePhoneNo}

                    />
                  </tr>
                </FormGroup>
                <FormGroup>
                  <tr>
                    <Field
                      component={renderField}
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
  form: "form",
  validate
})(EditForm);
