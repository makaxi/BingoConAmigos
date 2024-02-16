import { useState } from 'react';

const Marked = "X";
const Unmarked = "O";

const useGrid = (size: number) => {
  const [grid, setGrid] = useState(
    Array.from({ length: size }, () => Array(size).fill(Unmarked))
  );

  const toggleSquare = (rowIndex: number, colIndex: number) => {
    const newGrid = grid.map((row, rIdx) => 
      rIdx === rowIndex ? row.map((cell, cIdx) => 
        cIdx === colIndex ? cell === "O" ? "X" : "O" : cell) : row);
    
    setGrid(newGrid);
  };

  const checkWinningCondition = () => {
    const checkRow = (rowIndex: number) => {
        for (let i = 0; i < size; i++) {
            if (grid[rowIndex][i] !== Marked) {
                return false;
            }
        }
        return true;
    }

    const checkCol = (colIndex: number) => {
        for (let i = 0; i < size; i++) {
            if (grid[i][colIndex] !== Marked) {
                return false;
            }
        }
        return true;
    }

    const checkLeftDiag = () => {
        for (let i = 0; i < size; i++) {
            if (grid[i][i] !== Marked) {
                return false;
            }
        }
        return true;
    }

    const checkRightDiag = () => {
        let end = size - 1;
        for (let i = 0; i < size; i++) {
            if (grid[i][end-i] !== Marked) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 0; i < size; i++) {
        if (checkRow(i) || checkCol(i)) {
          return true;
        }
      }
    
    // Check diagonals
    if (checkLeftDiag() || checkRightDiag()) {
        return true;
    }
  };

  

  return { grid, toggleSquare, checkWinningCondition };
};

export default useGrid;