const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
let dp = Array(k + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const [w, v] = input[i].split(" ").map(Number);

  // dp[j]는 현재 최대 가치, dp[j - w] + v는 새 물건을 추가했을 때의 가치
  for (let j = k; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[k]);
