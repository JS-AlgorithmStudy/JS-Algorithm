// BFS 함수
function bfs(node, graph) {
  let visited = []; // 방문한 정점을 저장하기 위한 배열
  let distances = Array(graph.length).fill(0); // 거리를 저장하기 위한 배열
  let queue = []; // 큐를 초기화

  queue.push(node); // 시작 정점을 큐에 추가
  visited[node] = true; // 시작 정점을 방문한 것으로 표시
  distances[node] = 0; // 시작 노드의 거리는 0

  while (queue.length > 0) {
    const currentNode = queue.shift(); // 큐에서 정점을 하나 꺼내

    for (const adjacentNode of graph[currentNode]) {
      // 현재 정점과 인접한 모든 정점에 대해서
      if (!visited[adjacentNode]) {
        queue.push(adjacentNode); // 방문하지 않은 정점이라면 큐에 추가
        visited[adjacentNode] = true; // 방문한 것으로 표시
        distances[adjacentNode] = distances[currentNode] + 1; // 현재 노드의 거리 + 1
      }
    }
  }

  return distances;
}

function solution(n, edge) {
  // 그래프 생성
  let graph = [...Array(n + 1)].map(() => []);
  for (const [to, from] of edge) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const distances = bfs(1, graph);
  const max = Math.max(...distances); // 거리 중 최대값

  return distances.filter((val) => val === max).length;
}
