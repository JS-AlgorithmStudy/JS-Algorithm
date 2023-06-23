let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(x => parseInt(x));
let [n, m, k] = input;
let answer = 0;

while (k !== 0) {
  if (n / 2 > m) {
    n -= 1;
    k -= 1;
  } else {
    m -= 1;
    k -= 1;
  }
}

while (m !== 0) {
  if (m * 2 <= n) {
    answer = m;
    break;
  } else {
    m -= 1;
  }
}

console.log(answer);