function solution(board) {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;

  // board의 크기가 1x1, 1xN, Nx1인 경우
  if (row < 2 || col < 2) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (board[i][j] === 1) {
          return 1;
        }
      }
    }
    // board에 1이 없을 경우
    return 0;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] === 1) {
        // 현재 위치 기준으로 이전 행, 이전 열, 이전 행의 이전 열 값의 최솟값 + 1
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}
