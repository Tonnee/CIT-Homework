import React from 'react'
import { useDispatch } from 'react-redux'
import { minus } from '../slices/countSlice'

const Minus = () => {
  let dispatch = useDispatch()
  return (
      <>
          <button onClick={() => dispatch(minus())} className="my-20px">
              Minus
          </button>
      </>
  );
}

export default Minus
