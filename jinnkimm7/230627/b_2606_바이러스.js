const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230627/b_2606.txt').toString().split('\n');

const n = Number(input[0]); // 컴퓨터의 갯수(노드의 갯수)
const m = Number(input[1]); // 간선의 갯수

const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(n + 1).fill(false);
let answer = 0;
function dfs(x) {
  visited[x] = true;
  answer++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}
dfs(1);

console.log(answer - 1);