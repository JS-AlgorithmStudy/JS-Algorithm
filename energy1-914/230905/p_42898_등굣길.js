function solution(m, n, puddles) {
  let answer = 0;
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (!puddles.some(puddle => puddle[1] === i && puddle[0] === j)) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }
  answer = dp[n][m];
  return answer;
}
