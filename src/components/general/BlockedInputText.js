import React from 'react';
import InputTextCss from './InputText.module.css'
import Form from "react-bootstrap/Form"

export default function BlockedInputText({notify, formSubmitted, errors, min=0, max=100,required=false, hint="", type="text", name, value, changeHandler, placeholder}) {
  return (        
          <Form.Group>
            <Form.Label>{placeholder} {notify && `(${notify})`}</Form.Label>
            <Form.Control min={min} max={max} required={required} name={name} type={type} onChange={changeHandler} value={value} className={InputTextCss.defaultInput} placeholder={placeholder} />
            {
              <Form.Text  className={InputTextCss.inputHint}>
                {
                  formSubmitted && (!errors[name] && (hint ? hint : `Min ${min} characters`))
                }
              </Form.Text>
            }
          </Form.Group>        
  )
}
