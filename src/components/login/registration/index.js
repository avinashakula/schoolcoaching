import React from 'react'
import Heading from '../../general/Heading'
import BlockedInputText from '../../general/BlockedInputText'
import {useDispatch} from 'react-redux'
import { newUser } from '../../../store/slices/Registration';
import { Button } from 'react-bootstrap';
import FormContainer from '../../general/FormContainer';
import Form from "react-bootstrap/Form"
export default function Register() {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        name:"",
        mobile:"",
        school:"",
        grade:""
    });
    const [errorLists, setErrorLists] = React.useState({
        email:false,
        password:false,
        name:false,
        mobile:false,
        school:true,
        grade:false
    });
    const validateInput = (config) => {
        // required/mandatory checking...
        if( config.inputRequired ){
            let status = false;
            status = config.inputValue.length>0 ? true : false;
            if( status && config.inputMin>0 ){
                status = config.inputValue.length>=config.inputMin ? true : false;
            }
            if( status && config.inputMax>0 ){
                status = config.inputValue.length<=config.inputMax ? true : false;
            }
            setErrorLists((errorLists)=>{return {...errorLists, [config.inputName]:status}});                    
        }else{
            setErrorLists((errorLists)=>{return {...errorLists, [config.inputName]:true}});                    
        }
    }

    const changeHandler = (e) => {
        const validationConfig = {
            inputName:e.target.name,
            inputValue:e.target.value,
            inputRequired:e.target.required,
            inputMin:e.target.min,
            inputMax:e.target.max
        }    
        setUser({...user, [validationConfig.inputName]:validationConfig.inputValue}) 
        validateInput(validationConfig);      
    }
    const clickHandler = () => {
        setFormSubmitted(true);
        let allTrue = true;
        for( let error in errorLists ){
            if( errorLists[error] == false ){
                allTrue = false;
            }
        }
        console.log(allTrue);
        allTrue && dispatch(newUser(user))
    }
  return (
    <FormContainer>
        <Heading title={"Register"} />
        <Form>
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} required min={3} name={"email"} notify={"It will be your username to Login !"} value={user.email} placeholder={"Email"} changeHandler={changeHandler} />
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} required min={8} name={"password"} type={"password"} value={user.password} placeholder={"Password"} changeHandler={changeHandler} />
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} required min={3} name={"name"} value={user.name} placeholder={"Name"} changeHandler={changeHandler} />
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} required min={10} max={10} value={user.mobile} hint={"Should be 10 Digits"} type={"number"} name={"mobile"} placeholder={"Mobile"} changeHandler={changeHandler} />
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} value={user.school} name={"school"} placeholder={"School"} changeHandler={changeHandler} />
            <BlockedInputText formSubmitted={formSubmitted} errors={errorLists} required min={1} name={"grade"} value={user.grade} placeholder={"Grade"} changeHandler={changeHandler} />
            <Button className='mt-3' variant='success' size='sm' onClick={clickHandler}>Submit</Button>
        </Form>
    </FormContainer>
  )
}
