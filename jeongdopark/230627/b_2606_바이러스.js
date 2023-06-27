// https://www.acmicpc.net/problem/2606

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

const N = Number(input[count++]);
const M = Number(input[count++]);
const graph = [];

// 방문 체크 배열
const visited = Array.from({ length: N }, () => false);

let answer = 0;
for (let i = 0; i < N; i++) {
  graph.push([]);
}

// 그래프화
// [ [ 2, 5 ], [ 1, 3, 5 ], [ 2 ], [ 7 ], [ 1, 2, 6 ], [ 5 ], [ 4 ] ]
for (let i = 0; i < M; i++) {
  const [a, b] = input[count++].split(" ").map(Number);
  graph[a - 1].push(b);
  graph[b - 1].push(a);
}

const DFS = (num) => {
  if (visited[num] === true) {
    return;
  }

  visited[num] = true;
  answer += 1;

  for (let i = 0; i < graph[num - 1].length; i++) {
    DFS(graph[num - 1][i]);
  }
};

DFS(1);
console.log(answer - 1);
