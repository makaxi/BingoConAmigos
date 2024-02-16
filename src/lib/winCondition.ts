export const Marked = "X";
export const Unmarked = "O";

export const checkWinningCondition = (grid: string[][]) => {
    for (let i = 0; i < grid.length; i++) {
      if (checkRow(grid, i) || checkCol(grid, i)) {
        return true;
      }
    }
    if (checkLeftDiag(grid) || checkRightDiag(grid)) {
      return true;
    }
    return false;
  };
  
// Function to check if all cells in a row are marked
const checkRow = (grid: string[][], rowIndex: number, mark: string = Marked): boolean => {
  for (let i = 0; i < grid[rowIndex].length; i++) {
    if (grid[rowIndex][i] !== mark) {
      return false;
    }
  }
  return true;
};

// Function to check if all cells in a column are marked
const checkCol = (grid: string[][], colIndex: number, mark: string = Marked): boolean => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][colIndex] !== mark) {
      return false;
    }
  }
  return true;
};

// Function to check if all cells in the left diagonal are marked
const checkLeftDiag = (grid: string[][], mark: string = Marked): boolean => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][i] !== mark) {
      return false;
    }
  }
  return true;
};

// Function to check if all cells in the right diagonal are marked
const checkRightDiag = (grid: string[][], mark: string = Marked): boolean => {
  let end = grid.length - 1;
  for (let i = 0; i <= end; i++) {
    if (grid[i][end - i] !== mark) {
      return false;
    }
  }
  return true;
};

