const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230718/DFS와 BFS.txt').toString().split('\n');

// N 정점의 개수, M 간선의 개수, V 정점의 번호
const [N, M, V] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= N; i++) graph.push([]);
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
// 그래프 정렬
for (let i = 0; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

// dfs
const visited_dfs = new Array(N + 1).fill(false);
let answer_dfs = '';
const dfs = (graph, visited, x) => {
  visited[x] = true;
  answer_dfs += `${x} `;

  for (let y of graph[x]) {
    if (!visited_dfs[y]) {
      dfs(graph, visited, y);
    }
  }
}

dfs(graph, visited_dfs, V);
console.log(answer_dfs);

// bfs
const visited_bfs = new Array(N + 1).fill(false);
let answer_bfs = '';
const bfs = (graph, visited, start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length !== 0) {
    const x = queue.shift();
    answer_bfs += `${x} `;

    for (const node of graph[x]) {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    }
  }
}

bfs(graph, visited_bfs, V);
console.log(answer_bfs);