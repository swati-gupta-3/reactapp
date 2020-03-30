import React from "react";
import {Field,reduxForm} from 'redux-form';
import {Form,Button,Container,Row,Col,FormGroup} from 'react-bootstrap'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } 
  if (!values.username) {
    errors.username = 'Required'
  }
  
    else if(!/[A-Z]/.test(values.username)) {
    errors.username = 'Must be capital letter'
  }
  else if(!/[a-z]/.test(values.username)) {
    errors.username = 'Must be small letter'
  }
  else if(!/[0-9]/.test(values.username)) {
    errors.username = 'Must be digit'
  }
  else if(!/[@/$/^/#/%/]/.test(values.username)) {
    errors.username = 'Must be a special character'
  }
  else if (values.username.length < 8) {
    errors.username = 'Minimum  8 characters or more'
  }
 


  if (!values.email) {
    errors.email = 'Required'
  } 
   return errors
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      { touched &&((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const EditForm = props=>{

  const { handleSubmit,reset} = props
  return (


    <Container >

              <Row>
                 <Col ></Col>
    
                    <Col xs={3}>    
    
                   
  <Form border={1}
   onSubmit={handleSubmit}>
     <div>
<table>
  <FormGroup>
  {/* <div className="Form-group"> */}
<tr>
  < label></label><br/>
        < Field component={renderField} label="Name" size="lg"
          name="name"
                  />

</tr>
{/* </div> */}
</FormGroup>
<FormGroup>
  
 {/* <div className="form-group">  */}
<tr> 

<label></label><br/>  
        < Field component={renderField} label="Username" name="username"
          />
   

</tr>
{/* </div> */}
</FormGroup>
<FormGroup>
{/* <div className="form-group"> */}
<tr>
<br/>

<Field component={renderField} label="Email" name="email" type="email" size="lg"/> 



</tr>
</FormGroup>
{/* </div> */}
<div>
<tr>

<Button variant="primary" type="submit" size="lg" >Submit</Button>
<Button variant="secondary"type="Button" onClick={reset} size="lg"  > Reset</Button>
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
  }
export default reduxForm({
form:'storing',validate
})
(EditForm);
