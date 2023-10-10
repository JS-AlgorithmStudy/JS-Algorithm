// 백준 실버1

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const omokBoard = input.map((row) => row.trim().split(" ").map(Number)); // 오목판

function solution(omokBoard) {
  for (let row = 0; row < 19; row++) {
    for (let col = 0; col < 19; col++) {
      // 0이 아닐 때만
      if (omokBoard[row][col] !== 0) {
        const stone = omokBoard[row][col];

        // 오른쪽 방향 (→) 판별
        if (col <= 14 && (col === 0 || omokBoard[row][col - 1] !== stone)) {
          let count = 1;
          while (
            count <= 5 &&
            col + count < 19 &&
            omokBoard[row][col + count] === stone
          ) {
            count++;
          }
          if (count === 5) return stone + "\n" + (row + 1) + " " + (col + 1);
        }

        // 아래 방향 (↓) 판별
        if (row <= 14 && (row === 0 || omokBoard[row - 1][col] !== stone)) {
          let count = 1;
          while (
            count <= 5 &&
            row + count < 19 &&
            omokBoard[row + count][col] === stone
          ) {
            count++;
          }
          if (count === 5) return stone + "\n" + (row + 1) + " " + (col + 1);
        }

        // 오른쪽 아래 대각선 방향 (↘) 판별
        if (
          row <= 14 &&
          col <= 14 &&
          (row === 0 || col === 0 || omokBoard[row - 1][col - 1] !== stone)
        ) {
          let count = 1;
          while (
            count <= 5 &&
            row + count < 19 &&
            col + count < 19 &&
            omokBoard[row + count][col + count] === stone
          ) {
            count++;
          }
          if (count === 5) return stone + "\n" + (row + 1) + " " + (col + 1);
        }

        // 왼쪽 아래 대각선 방향 (↙) 판별
        if (
          row <= 14 &&
          col >= 4 &&
          (row === 0 || col === 18 || omokBoard[row - 1][col + 1] !== stone)
        ) {
          let count = 1;
          while (
            count <= 5 &&
            row + count < 19 &&
            col - count >= 0 &&
            omokBoard[row + count][col - count] === stone
          ) {
            count++;
          }
          if (count === 5)
            return stone + "\n" + (row + 4 + 1) + " " + (col - 4 + 1);
        }
      }
    }
  }
  return 0;
}

console.log(solution(omokBoard));
