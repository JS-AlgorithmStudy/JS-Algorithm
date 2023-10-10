// 백준 골드5

// 가로 상태 -> 가로와 대각선으로 이동 가능
// 세로 상태 -> 세로와 대각선으로 이동 가능
// 대각선 상태 -> 가로, 세로, 대각선으로 이동 가능

// const input = require("fs")
//   // .readFileSync("/dev/stdin")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const n = Number(input[0]);
// const house = input.slice(1).map((row) => row.split(" ").map(Number));

// // dp[r][c][p]
// // r과 c는 파이프의 끝 점의 행과 열, p는 파이프의 상태
// // p는 0, 1, 2 - 가로, 세로, 대각선
// const dp = Array.from(Array(n), () =>
//   Array.from(Array(n), () => Array(3).fill(0))
// );

// dp[0][1][0] = 1; // 초기 파이프 상태

// for (let r = 0; r < n; r++) {
//   for (let c = 2; c < n; c++) {
//     // 벽이 없다면
//     if (house[r][c] === 0) {
//       dp[r][c][0] += dp[r][c - 1][0] + dp[r][c - 1][2]; // 이전 열에서의 가로, 대각선 방향 파이프 경우의 수 더하기
//       dp[r][c][1] += dp[r - 1][c][1] + dp[r - 1][c][2]; // 이전 행애서의 세로, 대각선 방향 파이프 경우의 수 더하기
//     }
//     if (
//       // 대각선으로 가기 위한 조건들
//       // e.g. (r, c) = (1, 1)일 때, 대각선 방향에 파이프를 놓으려면, (0, 0), (0, 1), (1, 0)에 벽이 없어야 함
//       r > 0 &&
//       c > 0 &&
//       house[r][c] === 0 &&
//       house[r - 1][c] === 0 &&
//       house[r][c - 1] === 0
//     ) {
//       dp[r][c][2] +=
//         dp[r - 1][c - 1][0] + dp[r - 1][c - 1][1] + dp[r - 1][c - 1][2];
//     }
//   }
// }
// // 마지막 위치 (n-1, n-1)까지 도달하면 그 위치의 dp 배열의 합이 최종 경우의 수
// console.log(dp[n - 1][n - 1].reduce((acc, cur) => acc + cur, 0));
