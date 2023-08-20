const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let stack = [];
let result = [];
let currentNumber = 1;

for (let i = 1; i <= n; i++) {
  const makeNumber = Number(input[i]);

  // 만들려는 숫자가 스택의 top에 올 때까지 push
  while (currentNumber <= makeNumber) {
    stack.push(currentNumber);
    result.push("+");
    currentNumber += 1;
  }

  // 스택의 top에 만들려는 숫자가 있으면 pop
  if (stack[stack.length - 1] === makeNumber) {
    stack.pop();
    result.push("-");
    // 만들 수 없는 경우
  } else {
    result = ["NO"];
    break;
  }
}

console.log(result.join("\n"));
