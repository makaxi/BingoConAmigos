import React from 'react'

interface Props{
  passClickUp: () => void;
  value: boolean;
}

const Square = ({passClickUp, value} : Props) => {

  return (
    <button onClick={() => {passClickUp()}}>
      {value ? "x" : "O"}
    </button>
  )
};

export default Square;