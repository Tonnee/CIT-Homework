import React from 'react'
import Icon from '../icon/Icon'
import './button.css'

const Button = ({text, style, link}) => {
  return (
    <>
      <a href={link} className={style}>{text}<Icon /></a>
    </>
  )
}

export default Button
