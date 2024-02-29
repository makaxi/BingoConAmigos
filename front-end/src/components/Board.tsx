import React, { useState } from "react";
import Square from "./Square";

interface Props {
  size: number;
}

const Board = ({ size }: Props) => {
  
  const [board, setBoard] = useState<boolean[][]>(
    Array.from({length: size},() =>
    Array.from({length: size}, () => false)  
    ));
    
  const handleClick = ( row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = !newBoard[row][col];
    console.log("Clicked row " + row + " col " + col);
    console.log(newBoard[row][col]);
    setBoard(newBoard);
  };

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((value, colIndex) => (
            <Square 
              passClickUp={() => handleClick(rowIndex, colIndex)} 
              value={value}
              key={colIndex} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;