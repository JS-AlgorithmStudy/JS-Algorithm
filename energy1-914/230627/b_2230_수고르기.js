let [nums, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m] = nums.split(" ").map(x => parseInt(x));
let answer = 2e9;
let sequence = [];
input.map(x => sequence.push(parseInt(x)));
sequence.sort((a, b) => a - b);
// gap < m 이면 e를 한칸 뒤로 옮겨준다.
// gap > m 이면 s를 한칸 뒤로 옮겨준다.
let [s, e] = [0, 0];
let gap;
while (s <= e && e < n) {
  gap = Math.abs(sequence[s] - sequence[e]);
  if (gap > m) {
    s++;
    answer = Math.min(gap, answer);
  } else if (gap < m) {
    e++;
  } else if (gap === m) {
    answer = gap;
    break;
  }
}
console.log(answer);
