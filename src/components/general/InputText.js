import React from 'react';
import InputTextCss from './InputText.module.css'

export default function InputText({value, changeHandler, placeholder}) {
  return (
        <input type='text' onChange={changeHandler} value={value} className={InputTextCss.defaultInput} placeholder={placeholder} />
  )
}