import React from 'react'

interface Props{
  passClickUp: () => void;
  value: boolean;
  freeSpace: boolean;
}

const Square = ({passClickUp, value, freeSpace} : Props) => {

  return (
    <button onClick={freeSpace ? undefined : passClickUp} disabled={freeSpace}>
      {freeSpace ? "Free" : value ? "X" : "O"}
    </button>
  )
};

export default Square;