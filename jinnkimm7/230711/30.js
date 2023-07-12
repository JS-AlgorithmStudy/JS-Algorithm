const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230711/30.txt').toString().split('\n');

const numArr = input[0].split('');

// 규칙 1. 일의 자리가 0이 되어야한다.
if (!numArr.includes('0')) return console.log(-1);
else {
  // 규칙 2. 모든 자리수의 합이 3의 배수가 되어야한다.
  const sum = numArr.reduce((a, c) => a + Number(c), 0);
  if (sum % 3 !== 0) return console.log(-1);

  // 규칙 1,2를 만족하면 30의 배수다. 가장 큰값을 구해야하므로 내림차순 정렬해서 값을 출력한다.
  const answer = numArr.sort((a, b) => b - a).join('');

  console.log(answer);
}