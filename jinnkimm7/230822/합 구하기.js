const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230822/합 구하기.txt').toString().split('\n');

const arr = input[1].split(' ').map(Number); // 주어진 숫자 배열
const m = Number(input[2]); // 구간의 갯수

// 누적합 구하기
const prefixSum = [0];
let intervalSum = 0;
for(let num of arr) {
  intervalSum += num;
  prefixSum.push(intervalSum);
}

let answer = '';
for (let i = 3; i < 3 + m; i++) {
  const [x,y] = input[i].split(' ').map(Number);
  answer += prefixSum[y] - prefixSum[x - 1] + '\n';
}

console.log(answer);