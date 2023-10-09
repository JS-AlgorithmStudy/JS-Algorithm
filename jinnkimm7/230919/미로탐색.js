const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230919/미로탐색.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split('').map(Number));

function bfs(startX, startY) {
  const queue = [[startX, startY]];

  // 이동 가능한 경로
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    // 시작위치에서 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      // 경로를 벗어 날 경우, pass
      if (nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
      // 벽인 경우(0), pass
      if (graph[nx][ny] === 0) continue;

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(graph[n - 1][m - 1]);