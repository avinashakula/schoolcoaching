import React from 'react'
import Heading from '../../general/Heading'
import Button from '../../general/Button'
import BlockedInputText from '../../general/BlockedInputText'

export default function Login() {
    const [inputText, setInputText] = React.useState({
      username:"",
      password:""
    });
    const changeHandler = (e) => {
      setInputText({...inputText, [e.target.name]:e.target.value})
      
    }
  return (
    <div className='centeredWrapper formWrapper'>
        <Heading title={"Login"} />        
        <BlockedInputText name={"username"} value={inputText.username} changeHandler={changeHandler} placeholder={"Username"} />
        <BlockedInputText name={"password"} value={inputText.password} changeHandler={changeHandler} placeholder={"Password"} />
        <Button title={"Submit"} />
    </div>
  )
}
