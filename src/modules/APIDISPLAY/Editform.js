import React from "react";
import {Form,Table} from 'react-bootstrap'
const EditForm = ({
  changeUserName,
  changeUserUsername,
  changeUserEmail,
  user_name,
  user_username,
  user_email,
  save,
 }) => (
  <div>
    <Table>
     
      <tr>
        <td>
          <label>Name </label>
        </td>
        <td>
          <input
            type="text"
            onChange={changeUserName}
            value={user_name}
                    />
        </td>
      </tr>
      <tr>
        <td>
          <label>Username</label>
        </td>
        <td>
          <input
            type="text"
            onChange={changeUserUsername}
            value={user_username}
                     />
        </td>
      </tr>
      <tr>
        <td>
          <label>Email </label>
        </td>
        <td>
          <input type="text" onChange={changeUserEmail} value={user_email}  />
        </td>
      </tr>
      <tr>
        <td>
                 <input type="button"  onClick={save} value="Save"  />
    </td>
      </tr>
    </Table>
  </div>
);

export default EditForm;
