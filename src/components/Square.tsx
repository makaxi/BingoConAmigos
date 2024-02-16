import React from "react";
import { SquareProps } from "./Row";

export const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <div className="col">
    <button className="btn btn-primary w-100" onClick={onClick}>
      {value}
    </button>
  </div>
);
