import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
  let resultData = useSelector((state) => state.countResult.value)
  return (
    <>
      <h1 className='result'>{resultData}</h1>
    </>
  )
}

export default Result
