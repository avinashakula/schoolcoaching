import React from 'react'

export default function Student({user, i, onRemove}) {
  return (
    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.grade}</td>
                    <td>{user.school}</td>
                    <td>{user.mobile}</td>
                    <td>{user.password}</td>
                    <td><button className='btn btn-danger btn-sm' onClick={()=>{onRemove(i)}}>Remove</button></td>
                </tr>
   
  )
}
