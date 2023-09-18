function solution(m, n, puddles) {
  const graph = Array.from({ length: n }, () => new Array(m).fill(0));
  // 첫 번째 행에 웅덩이 있는지 체크
  let row_valid = true;
  // 첫 번째 열에 웅덩이 있는지 체크
  let col_valid = true;

  for (let i = 0; i < puddles.length; i++) {
    const [a, b] = puddles[i];
    graph[b - 1][a - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
      // 웅덩이일 경우
      if (graph[i][k] === -1) {
        if (i === 0) row_valid = false;
        if (k === 0) col_valid = false;
        continue;
      }
      // 첫번째 행
      if (i === 0 && row_valid) {
        graph[i][k] = 1;
        continue;
      }
      // 첫 번째 열
      if (k === 0 && col_valid) {
        graph[i][k] = 1;
        continue;
      }
      // 첫 번째, 행 열 아닌 경우
      if (i !== 0 && k !== 0) {
        // 윗칸
        let c = graph[i - 1][k];
        // 왼쪽 칸
        let d = graph[i][k - 1];
        // 웅덩이일 경우
        if (c === -1) c = 0;
        if (d === -1) d = 0;
        graph[i][k] = (c + d) % 1000000007;
      }
    }
  }
  console.log(graph);
  return graph[n - 1][m - 1];
}

[
  [1, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
];
