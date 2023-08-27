// https://www.acmicpc.net/problem/11441
// 누적합 알고리즘

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;
let answer = [];
// N : 수의 개수 
// A1, A2 - - - : 숫자
// M : 구간의 개수
// 각 구간의 i, j

const N = Number(input[count++])
const arr = input[count++].split(' ').map(Number);
const M = Number(input[count++])
const sum_arr = [0]
let sum = 0;

// 누적합 배열 만들기
for(let i=0; i<arr.length; i++){
  sum += arr[i]
  sum_arr.push(sum)
      // 원래 배열 : [10, 20, 30, 40, 50]
  // 누적합 :    [ 0, 10, 30, 60, 100, 150 ]
}

for(let i=0; i<M; i++){
  // a : 시작, b : 끝
  const [a, b] = input[count++].split(' ').map(Number);
  answer.push(sum_arr[b] - sum_arr[a-1]);
}

console.log(answer.join('\n'));
