const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
const [...numbers] = input[1].split(" ").map(Number);

let range = [];
let answer = "";

for (let i = 3; i < 3 + Number(input[2]); i++) {
  range.push(input[i].split(" ").map(Number));
}

// 누적 합 배열
let sumArray = new Array(numbers.length).fill(0);
sumArray[0] = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  sumArray[i] = sumArray[i - 1] + numbers[i];
}

for (i = 0; i < range.length; i++) {
  let sum = 0;
  let start = range[i][0] - 1;
  let end = range[i][1] - 1;

  if (start === 0) {
    answer += sumArray[end] + "\n";
  } else {
    answer += sumArray[end] - sumArray[start - 1] + "\n";
  }
}
console.log(answer);
