import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import * as selectors from '../APIDISPLAY/editFormSelector'
import EditForm from "../APIDISPLAY/Editform";

// const mapStateToProps = state => ({
  
// formData: selectors.getForm(state)

// })

class EditSubmitButton extends Component {
  
  
  submit = values => {
    
    // window.alert(`Submitted Data:\n\n${JSON.stringify(values, null, 2)}`);
  
      debugger
    // axios.post('https://d20b3d8f.ngrok.io/api/Student',values).then(res =>{
      
      // })

  };
  render() {
    return <EditForm onSubmit={this.submit} />;
  }
}
export default EditSubmitButton

