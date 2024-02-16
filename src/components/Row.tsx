import React from "react";
import { Square } from "./Square";

interface RowProps {
  rowIndex: number;
  onClick: (rowIndex: number, colIndex: number) => void;
  values: string[];
}

export interface SquareProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Row: React.FC<RowProps> = ({ rowIndex, onClick, values }) => (
  <div key={rowIndex} className="row mb-2">
    {values.map((value, colIndex) => (
      <Square
        key={colIndex}
        value={value}
        onClick={() => onClick(rowIndex, colIndex)}
      ></Square>
    ))}
  </div>
);

export default Row;
