const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230919/숨바꼭질.txt').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const visited = new Array(100001).fill(0);

function bfs(start) {
  // 시작위치와 찾아야될 위치가 같다면 함수 종료 
  if (start === k) return;

  const queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    const current = queue.shift();

    // 움직일 수 있는 경로
    for (let next of [current + 1, current - 1, current * 2]) {
      // 이미 방문했다면,
      if (visited[next] !== 0) continue;
      // 배열을 초과한다면, pass
      if (next < 0 || next >= 100001) continue;

      if (visited[next] === 0) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
}

bfs(n);
console.log(visited[k]);