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

// 현재 파이프의 방향을 반환하는 함수
const pipe_direction = (start, end) => {
  const [start_y, start_x] = start;
  const [end_y, end_x] = end;
  // 가로일 경우
  if (start_y === end_y && start_x === end_x - 1) {
    return 0;
  }
  // 세로일 경우
  if (start_y === end_y - 1 && start_x === end_x) {
    return 1;
  }
  // 대각선일 경우
  if (start_y === end_y - 1 && start_x === end_x - 1) {
    return 2;
  }
};

const DFS = (start, end) => {
  const dir = pipe_direction(start, end);
  const [end_y, end_x] = end;
  // 도착지일 경우
  if (end_y === N - 1 && end_x === N - 1) {
    answer += 1;
    return;
  }
  // 범위를 벗어난 경우 return
  if (end_y < 0 || end_y >= N || end_x < 0 || end_x >= N) return;
  // 벽일 경우 return
  if (graph[end_y][end_x] === 1) return;
  // 대각선일 경우 3곳을 확인해야한다.
  if (dir === 2) {
    if (graph[end_y - 1][end_x] === 1 || graph[end_y][end_x - 1] === 1) return;
  }

  for (let i = 0; i < direction[dir].length; i++) {
    const end_next_y = end_y + direction[dir][i][0];
    const end_next_x = end_x + direction[dir][i][1];
    DFS(end, [end_next_y, end_next_x]);
  }
};

DFS([0, 0], [0, 1]);
console.log(answer);
