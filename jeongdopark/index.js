let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

// 현재 파이프의 놓인 방향을 파악
// 가로, 세로, 대각선
// 각 놓인 상태에 따라서 다음으로 진행할 수 있는 상태가 제한된다.

// 가장 처음 파이프의 위치는 (0,0), (0,1)
let answer = 0;
const N = Number(input[count++]);
const graph = [];

for (let i = 0; i < N; i++) {
  graph.push(input[count++].split(" ").map(Number));
}

const direction = [
  // 가로
  [
    [0, 1],
    [1, 1],
  ],
  //세로
  [
    [1, 0],
    [1, 1],
  ],
  // 대각선
  [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
];

const DFS = (y, x, dir) => {
  if (graph[N - 1][N - 1] === 1) return;
  // 도착지일 경우
  if (y === N - 1 && x === N - 1) {
    answer += 1;
    return;
  }

  // 오른쪽 이동
  if (dir === 0 || dir === 2) {
    if (x + 1 < N) {
      if (graph[y][x + 1] === 0) {
        DFS(y, x + 1, 0);
      }
    }
  }

  // 아래로 이동
  if (dir === 1 || dir === 2) {
    if (y + 1 < N) {
      if (graph[y + 1][x] === 0) {
        DFS(y + 1, x, 1);
      }
    }
  }

  // 대각선 이동
  if (dir === 0 || dir === 1 || dir === 2) {
    if (y + 1 < N && x + 1 < N) {
      // 세곳을 확인해야한다.
      if (
        graph[y + 1][x + 1] === 0 &&
        graph[y + 1][x] === 0 &&
        graph[y][x + 1] === 0
      ) {
        DFS(y + 1, x + 1, 2);
      }
    }
  }
};

DFS(0, 1, 0);
console.log(answer);
