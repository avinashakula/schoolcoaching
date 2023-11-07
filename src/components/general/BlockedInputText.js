import React from 'react';
import InputTextCss from './InputText.module.css'

export default function BlockedInputText({name, value, changeHandler, placeholder}) {
  return (
        <div className={InputTextCss.blockedWrapper}><input name={name} type='text' onChange={changeHandler} value={value} className={InputTextCss.defaultInput} placeholder={placeholder} /></div>
  )
}
