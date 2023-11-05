import React from 'react';
import HeadingCss from './Heading.module.css'

export default function Heading({title}) {
  return (
    <h2 className={HeadingCss.mainHeading}>{title}</h2>
  )
}
