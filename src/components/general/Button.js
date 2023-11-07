import React from 'react';
import ButtonCss from './Button.module.css'

export default function Button({title, clickHandler}) {
  return (
        <button onClick={clickHandler} className={ButtonCss.btn} >{title}</button>
  )
}
