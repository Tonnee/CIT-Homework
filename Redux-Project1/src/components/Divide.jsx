import React from 'react'
import { useDispatch } from 'react-redux'
import { divide } from '../slices/countSlice'

const Divide = () => {
    let dispatch = useDispatch()
  return (
      <>
          <button onClick={() => dispatch(divide())} className="my-20px">
              Divide Half
          </button>
      </>
  );
}

export default Divide
