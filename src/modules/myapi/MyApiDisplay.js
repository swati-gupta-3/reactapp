import React from 'react';

import {Button} from 'react-bootstrap';
const MyApiDisplay = data=> {


  debugger
  return (
    <div>
    <table border="1">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>PhoneNo</th>
        <th>country</th> 
        </tr>
        {data.data.map(res => (
        <tr>
          <td>{res.studentId}</td>
          <td>{res.name}</td>
          <td>{res.address}</td>
         
          <td>{res.phoneNo}</td>

          <td>{res.country}</td>
           <Button variant="secondary"onClick={() => data.editApi(res.id)}>Edit</Button> 
          
 
                </tr>
      ))}
    
    </table>
    </div>
  )
}

export default MyApiDisplay
