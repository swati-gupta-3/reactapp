import React from "react";
import {Field,reduxForm} from 'redux-form';
import {Form} from 'react-bootstrap'

const EditForm = props=>{

  const { handleSubmit,reset} = props
  return (
   
  <Form 
   onSubmit={handleSubmit}>
     <div>
<table><div>
<tr>
<label>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        < Field component="input"
          name="name"
          type="text"
          
                  />

</tr></div>
<tr>

<label>Username &nbsp;&nbsp;</label>  
        < Field component="input" name="username"
          type="text" 
          />
   

</tr>
<tr>
<label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

<Field component="input" name="email"
         type="email"   /> 



</tr>
<tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="submit"   value="Save">&nbsp;&nbsp;Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button"   value="Save" onClick={reset}> Reset</button>
</tr>
      </table>
      </div>
  </Form>
  
);
  }
export default reduxForm({
form:'storing'
})
(EditForm);



