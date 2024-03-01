const checkBingoWinner = (board: boolean[][]) => {
  //3 ways to win bingo
  
  /* 
    1. row
    [x][0->n]
  */
  const size = board.length;

  for(let i = 0; i < size; i++){
    let rowWin = true;
    for(let j = 0; j < size; j++){
      rowWin = board[i][j] && rowWin;
    }
    if(rowWin) return true;
  }
  
  /*
  2. column
    [0->n][x]

  */

  for(let i = 0; i < size; i++){
    let colWin = true;
    for(let j = 0; j < size; j++){
      colWin = board[j][i] && colWin;
    }
    if(colWin) return true;
  }

  /*
  3. diagonal
    [x][x]
    [x][n-x-1]
 */
  let diagonalWin = true;
  let diagonalWinBackwards = true;
  for(let i = 0; i < size; i++){
    diagonalWin =  board[i][i] && diagonalWin;
    diagonalWinBackwards = board[i][size-i-1] && diagonalWinBackwards
  }
  if(diagonalWin || diagonalWinBackwards) return true;

  return false;
};

export default checkBingoWinner;