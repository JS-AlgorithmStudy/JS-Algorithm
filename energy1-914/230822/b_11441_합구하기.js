let [n, nums, m, ...intervals] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
n = +n;
nums = nums.split(" ").map(x => +x);
intervals = intervals.map(x => x.split(" ").map(x => +x));
let prefixSum = Array(n + 1).fill(0);
let answer = [];
for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
}

for (let interval of intervals) {
  let start = interval[0];
  let end = interval[1];
  let sum = prefixSum[end] - (start === 1 ? 0 : prefixSum[start - 1]);
  answer.push(sum);
}

console.log(answer.join("\n"));
