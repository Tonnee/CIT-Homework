import React from 'react'
import './paragraph.css'

const Paragraph = ({text, style}) => {
  return (
    <>
          <p className={style}>{text}</p>
    </>
  )
}

export default Paragraph
