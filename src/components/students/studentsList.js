import React from 'react'

const StudentsList = React.memo((props) => {
    const {users, onRemove} = props;
    console.log("Students List Rendered");
  return (
    <table border={1} width={600}>
      {
        users && users.length && users.map((user, index)=>(
          <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.grade}</td>
            <td>{user.school}</td>
            <td>{user.mobile}</td>
            <td>{user.password}</td>
            <td><button onClick={()=>{onRemove(index)}}>Remove</button></td>
          </tr>
        ))
      }
      </table>
  )
})
export default StudentsList;
 