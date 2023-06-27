const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230627/b_2875.txt').toString().split('\n');

let [n, m, k] = input[0].split(' ').map(Number)
let total = n + m;
let answer = 0;

while (true) {
  n -= 2;
  m -= 1;
  total -= 3;

  if (n < 0 || m < 0 || total < k) break;

  answer++;
}

console.log(answer);