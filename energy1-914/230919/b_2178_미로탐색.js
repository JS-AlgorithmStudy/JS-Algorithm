// 미로탐색
let nums = require("fs").readFileSync("example.txt").toString().split("\n");
let [n, m] = nums
  .shift()
  .split(" ")
  .map(x => +x);
let graph = nums.map(x => x.split("").map(x => +x));
//
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let queue = [[0, 0]];
let nx;
let ny;
// 레벨을 기록하는 배열
let level = Array.from(Array(n), () => Array(m).fill(0));
level[0][0] = 1;
graph[0][0] = 0;
while (queue.length) {
  let target = queue.shift();

  if (target[0] === n - 1 && target[1] === m - 1) {
    console.log(level[n - 1][m - 1]);
    break;
  }
  for (let i = 0; i < 4; i++) {
    nx = target[0] + dx[i];
    ny = target[1] + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
      queue.push([nx, ny]);
      // 방문한 곳은 0 으로 표시해서 재방문 막기
      graph[nx][ny] = 0;
      level[nx][ny] = level[target[0]][target[1]] + 1;
    }
  }
}
