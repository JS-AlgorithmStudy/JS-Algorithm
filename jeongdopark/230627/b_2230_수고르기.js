// https://www.acmicpc.net/problem/2230

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

// solve)
// 투 포인터 사용

const [N, M] = input[count++].split(" ").map(Number);
const num_arr = [];
let left_pointer = 0;
let right_pointer = 0;
let min_dif = Infinity;

for (let i = 0; i < N; i++) {
  num_arr.push(Number(input[count++]));
}

// 수열 오름차순 정렬
num_arr.sort((a, b) => {
  return a - b;
});

// 투 포인터 동작
while (right_pointer < num_arr.length) {
  const dif = num_arr[right_pointer] - num_arr[left_pointer];
  if (dif >= M) {
    if (min_dif > dif) min_dif = dif;
    left_pointer += 1;
  } else {
    right_pointer += 1;
  }
}

console.log(min_dif);
