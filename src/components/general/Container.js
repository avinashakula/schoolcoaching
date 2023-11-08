import React from 'react'
import ContainerCss from './Container.module.css'
export default function Container({children}) {
  return (
    <div className={ContainerCss.container}>{children}</div>
  )
}
