import React from 'react'
import "./Square.css"

interface Props{
  activity: string;
  freeSpace: boolean;
  value: boolean;
  passClickUp: () => void;
}

const Square = ({activity, passClickUp, value, freeSpace} : Props) => {

  return (
    <button 
      className={"square"}
      onClick={freeSpace ? undefined : passClickUp} 
      disabled={freeSpace}>
      {freeSpace ? "Free" : value ? "X" : activity}
    </button>
  )
};

export default Square;