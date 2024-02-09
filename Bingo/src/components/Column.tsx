import { MouseEvent } from "react";

interface ColumnProps {
  rowIndex: number;
  colIndex: number;
}

const handleClick = (event: MouseEvent, rowIndex: number, colIndex: number) => {
  console.log(`Button row: ${rowIndex} col: ${colIndex}`);
};

const Column: React.FC<ColumnProps> = ({ rowIndex, colIndex }) => (
  <div className="col">
    <button
      type="button"
      className="btn btn-primary w-100"
      onClick={(event) => handleClick(event, rowIndex, colIndex)}
    >
      Row {rowIndex} Col {colIndex}
    </button>
  </div>
);

export default Column;
