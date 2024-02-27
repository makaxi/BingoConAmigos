import React from "react";
import Square from "./Square";

interface Props {
  size: number;
}

const Board = ({ size }: Props) => {
  const handleClick = (row: number, col: number) => {
    console.log("Clicked row " + row + " col " + col);    return
  };

  const board = Array.from({ length: size }, (_, rowIndex) =>
    Array.from({ length: size }, (_, colIndex) => ({ row: rowIndex, col: colIndex }))
  );

  return (
    <div>
      Amingo
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map(({row,col}, colIndex) => (
            <Square 
              onClick={handleClick} 
              row={row} 
              col={col} 
              key={colIndex} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
