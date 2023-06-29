const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230704/유기농배추.txt').toString().split('\n');

function dfs(graph, m, n, x, y) {
  // 그래프 범위를 벗어나는 경우 false를 return
  if (x < 0 || x >= m || y < 0 || y >= n) return false;
  /**
  배추가 있는 경우(1), 방문처리를 하고(0)
  재귀함수를 이용해 상하좌우 완전탐색을 진행 => 완전 탐색이 끝나면 true를 return 
   */
  if (graph[y][x] === 1) {
    graph[y][x] = 0;
    dfs(graph, m, n, x, y + 1);
    dfs(graph, m, n, x, y - 1);
    dfs(graph, m, n, x - 1, y);
    dfs(graph, m, n, x + 1, y);
    return true;
  }
  return false;
}

const testCases = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCases; tc++) {
  // m: 가로의 길이, n: 세로의 길이, k: 배추가 심어져있는 위치의 개수
  const [m, n, k] = input[line].split(' ').map(Number);

  // 그래프 구현
  const graph = [];
  for (let i = 0; i < n; i++) graph.push(new Array(m).fill(0));
  for (let i = 1; i <= k; i++) {
    const [x, y] = input[i + line].split(' ').map(Number);
    graph[y][x] = 1;
  }

  // 완전탐색 진행
  let answer = 0;
  for (let i = 0; i < n; i++) { // y
    for (let j = 0; j < m; j++) { // x
      if (dfs(graph, m, n, j, i)) answer++;
    }
  }

  line += k + 1;
  console.log(answer);
}