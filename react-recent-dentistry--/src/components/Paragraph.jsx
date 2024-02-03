import React from 'react'

const Paragraph = ({text, style}) => {
  return (
    <>
          <p className={style}>{text}</p>
    </>
  )
}

export default Paragraph
