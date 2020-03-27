import React from 'react'
import EditForm from '../APIDISPLAY/Editform'
import showResults from './Alert'
class EditSubmitButton extends React.Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return <EditForm onSubmit=
    {this.submit}
    />
  }
}
export default EditSubmitButton;