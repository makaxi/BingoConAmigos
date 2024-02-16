import { useState } from 'react';
import { useEffect } from 'react';
import { checkWinningCondition, Marked, Unmarked } from '../lib/winCondition';

const useGrid = (size: number) => {
  const [grid, setGrid] = useState(
    Array.from({ length: size }, () => Array(size).fill(Unmarked))
  );

  const toggleSquare = (rowIndex: number, colIndex: number) => {
    // Clone the grid to not mutate the state directly
    const newGrid = grid.map(row => [...row]);

    // Determine the new value for the cell
    const currentValue = newGrid[rowIndex][colIndex];
    const newValue = currentValue === Unmarked ? Marked : Unmarked;

    // Update the cell
    newGrid[rowIndex][colIndex] = newValue;

    // Update the state
    setGrid(newGrid);
  };

  useEffect(() => {
    const winnerExists = checkWinningCondition(grid);
    if (winnerExists) {
      console.log('Winner detected!');
      // Here you can also trigger any UI update or side-effect to notify about the win
    }
  }, [grid]); // This effect runs every time the `grid` state changes


  return { grid, toggleSquare, checkWinningCondition };
};

export default useGrid;