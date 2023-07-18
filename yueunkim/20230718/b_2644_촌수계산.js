const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]); // 전체 사람 수
const [a, b] = input[1].split(" ").map(Number); // 촌수를 계산할 사람
const m = parseInt(input[2]); // 관계의 개수

// 그래프 생성
let graph = [...Array(n + 1)].map(() => []);
for (let i = 3; i <= m + 2; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

console.log(graph[9]);

let visited = Array(n + 1).fill(0); // 방문 여부 및 촌수 저장 배열

// DFS 함수
function dfs(man) {
  for (const adjacentNode of graph[man]) {
    // 방문하지 않은 인접노드면
    if (visited[adjacentNode] === 0) {
      visited[adjacentNode] = visited[man] + 1; // 현재 노드의 촌수 + 1로 업뎃
      dfs(adjacentNode);
    }
  }
}

dfs(a);

// 촌수를 계산받을 사람의 촌수가 0이라면 -1 출력
if (visited[b] === 0) console.log(-1);
else console.log(visited[b]);
