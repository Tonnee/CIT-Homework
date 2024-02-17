import React from 'react'

const listItem = ({text, style}) => {
  return (
    <>
          <li className={style}>{text}</li>
    </>
  )
}

export default listItem
