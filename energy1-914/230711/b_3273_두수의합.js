let [n, input, x] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
input = input
  .split(" ")
  .map(x => +x)
  .sort((a, b) => a - b);
  
x = +x;
let answer = 0;
let start = 0;
let end = input.length - 1;

while (start < end) {
  if (input[start] + input[end] === x) {
    answer++;
    start++;
  } else if (input[start] + input[end] > x) {
    end--;
  } else {
    start++;
  }
}
console.log(answer);
