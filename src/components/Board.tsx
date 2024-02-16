import React from "react";
import Row from "./Row";
import useGrid from "../hooks/useGrid";

interface DynamicGridProp {
  size: number;
}

const Board: React.FC<DynamicGridProp> = ({ size }) => {
  const { grid, toggleSquare } = useGrid(size);

  const handleClick = (rowIndex: number, colIndex: number) => {
    toggleSquare(rowIndex, colIndex);
  };

  return (
    <div className="container">
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
