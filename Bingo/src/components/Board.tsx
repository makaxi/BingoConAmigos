import React from "react";
import { MouseEvent } from "react";

interface DynamicGridProp {
  size: number;
}

const Board: React.FC<DynamicGridProp> = ({ size }) => {
  const rows = Array.from({ length: size }, (_, index) => index);
  const cols = Array.from({ length: size }, (_, index) => index);

  const handleClick = (
    event: MouseEvent,
    rowIndex: number,
    colIndex: number
  ) => {
    console.log(`Button row: ${rowIndex} col: ${colIndex}`);
  };

  return (
    <div className="container">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="row mb-2">
          {cols.map((_, colIndex) => (
            <div key={colIndex} className="col">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={(event) => handleClick(event, rowIndex, colIndex)}
              >
                {rowIndex * size + colIndex + 1}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
