import React from 'react';
import PrimaryButtonCss from './PrimaryButton.module.css'

export default function PrimaryButton({title, clickHandler}) {
  return (
        <button onClick={clickHandler} className={PrimaryButtonCss.btn} >{title}</button>
  )
}
