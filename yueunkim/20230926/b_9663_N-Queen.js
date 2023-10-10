// 백준 골드4

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const chessBoard = new Array(n).fill(0).map(() => new Array(n).fill(0)); // 체스판
let count = 0;

function isQueen(row, col) {
  // 같은 열 확인
  for (let i = 0; i < row; i++) {
    if (chessBoard[i][col] === 1) return false;
  }

  // 왼쪽 위 대각선 확인
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 1) return false;
  }

  // 오른쪽 위 대각선 확인
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === 1) return false;
  }

  return true;
}

function solution(row) {
  for (let col = 0; col < n; col++) {
    if (isQueen(row, col)) {
      chessBoard[row][col] = 1;
      solution(row + 1); // 다음 행
      chessBoard[row][col] = 0;
    }
  }

  if (row === n) count++;
  return count;
}

console.log(solution(0));
