const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

//그래프 생성
let graph = [...Array(N + 1)].map(() => []);
for (let i = 1; i <= M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

let result = []; //결과 담을 배열
let visited = []; // 방문한 정점을 저장하기 위한 배열

// DFS 함수
function dfs(node) {
  // 현재 정점을 방문한 것으로 표시하고 visited 배열을 업데이트
  visited[node] = true;

  // 현재 정점을 처리
  result.push(node);

  // 현재 정점과 인접한 모든 정점에 대해서
  for (const adjacentNode of graph[node].sort((a, b) => a - b)) {
    // 방문하지 않은 정점이라면 DFS를 재귀적으로 호출
    if (!visited[adjacentNode]) {
      dfs(adjacentNode);
    }
  }
}

// BFS 함수
function bfs(node) {
  const queue = []; // 큐를 초기화
  queue.push(node); // 시작 정점을 큐에 추가
  visited[node] = true; // 시작 정점을 방문한 것으로 표시

  while (queue.length > 0) {
    const currentNode = queue.shift(); // 큐에서 정점을 하나 꺼내
    result.push(currentNode); // 현재 정점 처리

    for (const adjacentNode of graph[currentNode].sort((a, b) => a - b)) {
      // 현재 정점과 인접한 모든 정점에 대해서:
      if (!visited[adjacentNode]) {
        queue.push(adjacentNode); // 방문하지 않은 정점이라면 큐에 추가
        visited[adjacentNode] = true; // 방문한 것으로 표시
      }
    }
  }
}

dfs(V);
console.log(result.join(" "));

result = [];
visited = [];

bfs(V);
console.log(result.join(" "));
