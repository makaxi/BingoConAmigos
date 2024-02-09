import React from "react";
import Row from "./Row";

interface DynamicGridProp {
  size: number;
}

const Board: React.FC<DynamicGridProp> = ({ size }) => {
  const rows = Array.from({ length: size }, (_, index) => index);

  return (
    <div className="container">
      {rows.map((rowIndex) => (
        <Row key={rowIndex} rowIndex={rowIndex} size={size} />
      ))}
    </div>
  );
};

export default Board;
