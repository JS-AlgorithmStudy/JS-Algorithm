let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("")
  .map(x => +x)
  .sort((a, b) => b - a);

let sum = input.reduce((a, b) => a + b);

if (input.includes(0) && sum % 3 === 0) {
  console.log(input.join(""));
} else {
  console.log(-1);
}
