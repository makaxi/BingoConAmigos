import React, { useState } from "react";
import Square from "./Square";
import checkBingoWinner from "../utils/checkBingoWinner";

interface Props {
  size: number;
}

const Board = ({ size }: Props) => {
  
  const [board, setBoard] = useState<boolean[][]>(() => {
    const initialBoard = Array.from({length: size}, () =>
      Array.from({length: size}, () => false)  
    );
    initialBoard[Math.floor(size/2)][Math.floor(size/2)] = true;
    return initialBoard;
  });
    
  const handleClick = ( row: number, col: number) => {
    if(row === Math.floor(size/2) && col === Math.floor(size/2)) return;
    const newBoard = [...board];
    newBoard[row][col] = !newBoard[row][col];
    //console.log("Clicked row " + row + " col " + col);
    //console.log(newBoard[row][col]);
    //if(checkBingoWinner(newBoard)) console.log("you won");
    console.log(checkBingoWinner(newBoard) ? "BINGO!" : "currently no win");
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
              freeSpace={rowIndex === Math.floor(size / 2) && colIndex === Math.floor(size / 2)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;