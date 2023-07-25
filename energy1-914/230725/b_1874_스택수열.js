let [n, ...nums] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(x => +x);
console.log(nums);
let stack = [];
let answer = [];
let number = 1;

for (let i = 0; i < n; i++) {
  let target = nums[i];
  while (number <= target) {
    stack.push(number);
    answer.push("+");
    number++;
  }
  if (target === stack[stack.length - 1]) {
    stack.pop();
    answer.push("-");
  } else {
    console.log("NO");
    return;
  }
}
console.log(answer.join("\n"));
