const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230801/합 구하기.txt').toString().split('\n');

const arr = input[1].split(' ').map(Number); // 주어진 숫자 배열
const m = Number(input[2]); // 구간의 갯수

// 누적합 구하기
let sum = 0;
const prefixSum = [0];
for (let i of arr) {
  sum += i;
  prefixSum.push(sum);
}

let answer = '';
for (let i = 3; i < 3 + m; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  answer += prefixSum[right] - prefixSum[left - 1] + '\n';
}

console.log(answer);