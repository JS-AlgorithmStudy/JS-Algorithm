let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let count = 0;

const [N, M] = input[count++].split(" ").map(Number);
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const graph = [];
for (let i = 0; i < N; i++) {
  graph.push(input[count++].split("").map(Number));
}

const BFS = (y, x) => {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const queue = [];
  // 시작 지점 방문
  visited[y][x] = true;
  // queue에 삽입
  queue.push([y, x]);

  while (queue.length !== 0) {
    // 현재 좌표
    const [crnt_y, crnt_x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const next_y = dy[i] + crnt_y;
      const next_x = dx[i] + crnt_x;

      // graph 범위 내에 있는지
      if (next_y >= 0 && next_y < N && next_x >= 0 && next_x < M) {
        // 방문 체크 && 0이면 안됨
        if (visited[next_y][next_x] === false && graph[next_y][next_x] !== 0) {
          visited[next_y][next_x] = true;
          queue.push([next_y, next_x]);
          graph[next_y][next_x] = graph[crnt_y][crnt_x] + 1;
        }
      }
    }
  }
};

BFS(0, 0);
console.log(graph[N - 1][M - 1]);
