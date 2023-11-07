import React from 'react';
import InputTextCss from './InputText.module.css'

export default function BlockedInputText({type="text", name, value, changeHandler, placeholder}) {
  return (
        <div className={InputTextCss.blockedWrapper}>
          <input name={name} type={type} onChange={changeHandler} value={value} className={InputTextCss.defaultInput} placeholder={placeholder} />
        </div>
  )
}
