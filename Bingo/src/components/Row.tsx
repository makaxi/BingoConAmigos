import React from "react";
import Column from "./Column";

interface RowProps {
  rowIndex: number;
  size: number;
}

const Row: React.FC<RowProps> = ({ rowIndex, size }) => (
  <div key={rowIndex} className="row mb-2">
    {Array.from({ length: size }, (_, colIndex) => (
      <Column key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
    ))}
  </div>
);

export default Row;
