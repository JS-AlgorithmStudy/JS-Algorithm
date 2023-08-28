function solution(n, results) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let x of results) {
    let i = x[0];
    let j = x[1];
    graph[i][j] = 1;
    graph[j][i] = -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (graph[i][j] === 1 && graph[j][k] === 1) {
          graph[i][k] = 1;
          graph[k][i] = -1;
        } else if (graph[i][j] === -1 && graph[j][k] === -1) {
          graph[i][k] = -1;
          graph[k][i] = 1;
        }
      }
    }
  }
  for (let x of graph) {
    let length = x.filter(num => num !== 0).length;
    if (length === n - 1) {
      answer++;
    }
  }
  return answer;
}
