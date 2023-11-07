import React from 'react'
import Student from './student';

const StudentsList = React.memo((props) => {
    const {users, onRemove, loading} = props;
    console.log("Students List Rendered");
    
  return (
    <table border={1} width={600}>
        <thead>
            <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Email</td>
                <td>Grade</td>
                <td>School</td>
                <td>Mobile</td>
                <td>Password</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                loading ? <tr><td>Loading..</td></tr> :
                users.map((user, i)=>(
                    <Student key={i} user={user} i={i} onRemove={onRemove} />
                ))
            }
        </tbody>
      </table>
  )
})
export default StudentsList;
 