function solution(n, results) {
  // 그래프 생성
  let graph = [...Array(n + 1)].map(() => Array(n + 1).fill(false));
  for (let i = 1; i <= results.length; i++) {
    for (let [winner, loser] of results) {
      graph[winner][loser] = true;
    }
  }

  // 플로이드 워셜 알고리즘
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = true;
        }
      }
    }
  }

  let answer = 0;

  // 승패가 확정된 선수 찾기
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] || graph[j][i]) count++;
    }
    if (count === n - 1) answer++;
  }
  return answer;
}
