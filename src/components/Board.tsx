import React from "react";
import Row from "./Row";
import useGrid from "../hooks/useGrid";

interface DynamicGridProp {
  size: number;
}

const Board: React.FC<DynamicGridProp> = ({ size }) => {
  const { grid, toggleSquare, checkWinningCondition } = useGrid(size);

  const handleClick = (rowIndex: number, colIndex: number) => {
    // Update grid state with new grid
    toggleSquare(rowIndex, colIndex);

    checkWinningCondition();
  };

  return (
    <div className="container-fluid">
      {grid.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          values={row}
          rowIndex={rowIndex}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;
