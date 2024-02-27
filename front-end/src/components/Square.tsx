import React, { useState } from 'react'

interface Props{
  onClick: (row: number, col: number) => void;
  row: number;
  col: number;
}

const Square = ({onClick, row, col} : Props) => {

  const [mark, setMark] = useState(false);

  const handleClick = () => {
    onClick(row, col);
  }

  return (
    <button
      onClick={() => {
        setMark(!mark);
        handleClick();
      }}
    >
      {mark ? "x" : "O"}
    </button>
  )
}

export default Square