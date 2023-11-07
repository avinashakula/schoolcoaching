import React from 'react'
import Heading from '../../general/Heading'
// import Button from '../../general/Button'
import BlockedInputText from '../../general/BlockedInputText'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {
    const [inputText, setInputText] = React.useState({
      username:"",
      password:""
    });
    const [submitting, setSubmitting] = React.useState(false);
    const changeHandler = (e) => {
      setInputText({...inputText, [e.target.name]:e.target.value})
    }
    const clickHandler = () => {
      setSubmitting(!submitting)
      setTimeout(()=>{
        setSubmitting(false)
      }, 2000)
    }
  return (
    <div className='centeredWrapper formWrapper'>
        <Heading title={"Login"} />        
        <BlockedInputText name={"username"} value={inputText.username} changeHandler={changeHandler} placeholder={"Username"} />
        <BlockedInputText name={"password"} value={inputText.password} changeHandler={changeHandler} placeholder={"Password"} />
        <Button size='sm' variant={"success"} disabled={submitting} onClick={clickHandler}>Submit</Button> 
        <Button variant='link'><Link to="/register">Register</Link></Button>
    </div>
  )
}
