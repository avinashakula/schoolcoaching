import React from 'react'
import Student from './student';
import Table from 'react-bootstrap/Table';

const StudentsList = React.memo((props) => {
    const {users, onRemove, loading} = props;
    console.log("Students List Rendered");
    
  return (
    <Table responsive="sm" striped bordered hover size='sm'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Grade</th>
                <th>School</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Actions</th>
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
      </Table>
  )
})
export default StudentsList;
 