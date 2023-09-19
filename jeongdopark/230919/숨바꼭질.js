let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

const [N, K] = input[count++].split(" ").map(Number);
const visited = Array(100001).fill(false);

const BFS = (start) => {
  if (N === K) return 1;
  const queue = [];
  visited[start] = true;
  queue.push([start, 1]);
  while (queue.length !== 0) {
    const [position, second] = queue.shift();
    // console.log(position, second, queue);

    // 총 세 가지 방법
    for (let i = 0; i < 3; i++) {
      // 한칸 앞으로 이동
      if (i === 0) {
        const next_pos = position + 1;
        // 도착지일 경우 return
        if (next_pos === K) {
          return second + 1;
        }
        // 도착지 아닐 경우, queue에 push & 방문 처리
        if (next_pos <= 100000 && visited[next_pos] === false) {
          queue.push([next_pos, second + 1]);
          visited[next_pos] = true;
        }
      }
      // 한칸 뒤로 이동
      if (i === 1) {
        const next_pos = position - 1;
        if (next_pos === K) {
          return second + 1;
        }
        if (next_pos >= 0 && visited[next_pos] === false) {
          queue.push([next_pos, second + 1]);
          visited[next_pos] = true;
        }
      }

      // *2 이동
      if (i === 2) {
        const next_pos = position * 2;
        if (next_pos === K) {
          return second + 1;
        }
        if (next_pos <= 100000 && visited[next_pos] === false) {
          queue.push([next_pos, second + 1]);
          visited[next_pos] = true;
        }
      }
    }
  }
};

console.log(BFS(N) - 1);
