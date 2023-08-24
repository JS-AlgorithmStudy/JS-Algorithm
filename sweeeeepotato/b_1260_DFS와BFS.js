const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [vertex, edge, start] = input[0].split(" ").map(Number);
  input.shift();
  const edges = input.map((val) => val.split(" ").map(Number));
  const graph = [...Array(vertex + 1)].map(() => []);

  edges.forEach((val) => {
    graph[val[0]].push(val[1]);
    graph[val[1]].push(val[0]);
  });

  graph.forEach((val) => val.sort((a, b) => a - b));
  console.log(...DFS_BFS("DFS", graph, start));
  console.log(...DFS_BFS("BFS", graph, start));
};

const DFS_BFS = (mode, graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit =
        mode === "DFS"
          ? [...graph[node], ...needVisit]
          : [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

solution(input);
