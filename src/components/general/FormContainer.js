import React from 'react'
import FormContainerCss from './FormContainer.module.css'
export default function FormContainer({children}) {
  return (
    <div className={FormContainerCss.container}>{children}</div>
  )
}
