import React from 'react'
import Square from './Square'

interface Props{
  size: number;
}

const Board = ({size}: Props) => {

  const board = Array.from({length: size}, () => Array.from({length: size}));

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <Square className="col" key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board