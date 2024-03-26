import React from 'react'
import { useDispatch } from 'react-redux'
import {plus} from '../slices/countSlice'


const Plus = () => {
  let dispatch = useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(plus())} className='my-20px'>Plus</button>
    </>
  )
}

export default Plus
