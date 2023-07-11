let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let testCase = input.shift();

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

// 테스트 케이스 안에서 포문 실행
for (let i = 0; i < testCase; i++) {
  let answer = 0;
  let [m, n, k] = input
    .shift()
    .split(" ")
    .map(x => +x);

  let graph = Array.from(Array(n), () => Array(m).fill(0));

  // 그래프 연결 상태를 만든다
  for (let j = 0; j < k; j++) {
    let [x, y] = input
      .shift()
      .split(" ")
      .map(x => +x);
    graph[y][x] = 1;
  }
  // 그래프가 1이면 answer를 증가시키고 DFS실행한다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        answer++;
        DFS(i, j, graph, n, m);
      }
    }
  }
  console.log(answer);
}

function DFS(x, y, graph, n, m) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
      graph[nx][ny] = 0;
      DFS(nx, ny, graph, n, m);
    }
  }
}
