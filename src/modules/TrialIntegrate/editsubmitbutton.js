import React from 'react'
import EditForm from '../APIDISPLAY/Editform'
// import showResults from './Alert'
class EditSubmitButton extends React.Component {
  
 submit = values => {
    console.log(values)
    window.alert(`Submitted Data:\n\n${JSON.stringify(values,null,2)}`);
    
  }
  render() {
    return <EditForm onSubmit={this.submit}
  
    />
  }
}
export default EditSubmitButton;