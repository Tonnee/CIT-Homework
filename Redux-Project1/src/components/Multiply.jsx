import React from 'react'
import { useDispatch } from 'react-redux'
import {multiply} from '../slices/countSlice'

const Multiply = () => {
    let dispatch = useDispatch()
  return (
      <>
          <button onClick={() => dispatch(multiply())} className="my-20px">
              Multiply
          </button>
      </>
  );
}

export default Multiply
