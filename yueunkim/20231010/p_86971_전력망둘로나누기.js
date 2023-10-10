function solution(n, wires) {
  let answer = [];
  // 그래프 생성
  let graph = [...Array(n + 1)].map(() => []);
  for (let i = 0; i < wires.length; i++) {
    let [x, y] = wires[i];
    graph[x].push(y);
    graph[y].push(x);
  }

  // 간선을 순서대로 제거
  for (let i = 0; i < wires.length; i++) {
    // let separated = graph;
    let separated = JSON.parse(JSON.stringify(graph)); // Deep copy
    let [x, y] = wires[i];
    separated[x] = separated[x].filter((e) => e !== y);
    separated[y] = separated[y].filter((e) => e !== x);

    // dfs
    const visited = [];
    function dfs(node) {
      let count = 1; // 연결된 송전탑 수
      visited[node] = true;

      for (const adjacentNode of separated[node]) {
        if (!visited[adjacentNode]) {
          count += dfs(adjacentNode);
        }
      }
      return count;
    }
    let result = dfs(x);
    answer.push(Math.abs(result - (n - result))); // 두 전력망의 송전탑 개수 차이 push
  }
  return Math.min(...answer);
}
