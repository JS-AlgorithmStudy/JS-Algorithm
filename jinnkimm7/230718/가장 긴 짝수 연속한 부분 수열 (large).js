const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230718/가장 긴 짝수 연속한 부분 수열 (large).txt').toString().split('\n');

// n 수열의 길이, k 삭제할 수 있는 최대횟수
const [n, k] = input[0].split(' ').map(Number);
// arr 수열
const arr = input[1].split(' ').map(Number);

let answer = 0;
let oddCount = 0;
let right = 0;

for (let left = 0; left < n; left++) {
  while (right < n) {
    // right 포인터가 가리키는 값이 짝수이면, right 포인터를 이동시킨다.
    if (arr[right] % 2 === 0) right++;
    else {
      // 배열 안에 홀수가 k개라면, right 포인터 이동을 종료시킨다.
      if (oddCount === k) break;
      // right 포인터가 가리키는 값이 홀수이면, oddCount값을 증가시키고, right 포인터를 이동시킨다.
      oddCount++;
      right++;
    }
  }

  answer = Math.max(answer, right - left - oddCount);
  // left 포인터가 가리키는 값이 홀수였다면, left 포인터를 오른쪽으로 이동시킬때, 지울수 있는 홀수의 개수를 증가시킨다.
  if (arr[left] % 2 === 1) oddCount--;
}
console.log(answer);