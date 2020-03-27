import React from 'react'
// import EditForm from './Editform'
import {Button,ButtonToolbar} from 'react-bootstrap';
const ApiDisplay = data=> {
  console.log(data, 'rendder')
  // console.log(editApi,"methodddd")
  debugger
  return (
    <div>
    <table border="1">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>username</th>
        <th>Email</th>
        <th>city</th> 
        </tr>
      {data && data.data.map(res => (
        <tr>
          <td>{res.id}</td>
          <td>{res.name}</td>
          <td>{res.username}</td>
          <td>{res.email}</td>
         
          <td>{res.address.city}</td>
           <Button onClick={() => data.editApi(res.id)}>Edit</Button> 
          
 
                </tr>
      ))}
    </table>
    </div>
  )
}

export default ApiDisplay
