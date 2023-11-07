import React from 'react'
import Heading from '../../general/Heading'
import BlockedInputText from '../../general/BlockedInputText'
import {useSelector,useDispatch} from 'react-redux'
import { setCount, newUser } from '../../../store/slices/Registration';
import { Button } from 'react-bootstrap';
export default function Register() {
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        name:"",
        mobile:"",
        school:"",
        grade:""
    });
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    const clickHandler = () => {
        dispatch(newUser(user))
    }
  return (
    <div className='centeredWrapper formWrapper'>
        <Heading title={"Register"} />
        <BlockedInputText value={user.email} name={"email"} placeholder={"Email"} changeHandler={changeHandler} />
        <BlockedInputText type={"password"} value={user.password} name={"password"} placeholder={"Password"} changeHandler={changeHandler} />
        <BlockedInputText value={user.name} name={"name"} placeholder={"Name"} changeHandler={changeHandler} />
        <BlockedInputText value={user.mobile} name={"mobile"} placeholder={"Mobile"} changeHandler={changeHandler} />
        <BlockedInputText value={user.school} name={"school"} placeholder={"School"} changeHandler={changeHandler} />
        <BlockedInputText value={user.grade} name={"grade"} placeholder={"Grade"} changeHandler={changeHandler} />
        <Button variant='success' size='sm' onClick={clickHandler}>Submit</Button>
    </div>
  )
}
