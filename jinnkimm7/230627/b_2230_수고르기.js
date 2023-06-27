const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230627/b_2230.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
// 숫자배열을 오름차순으로 정렬한다.
arr.sort((a, b) => a - b);

let min = Infinity;
let start = 0;
let end = 0;

// 투 포인터
while (end < arr.length) {
  const diff = arr[end] - arr[start];

  // 거리가 m보다 작을 경우 end를 증가시킨다.
  if (diff < m) {
    end++;
  } else { // 거리가 m보다 클 경우 이전의 diff와 현재의 diff를 비교해 작은 값을 최소값에 할당한다.
    start++;
    min = Math.min(min, diff);
  }
  // 거리가 m과 같을 경우 while문을 탈출하고 m을 출력한다.
  if (diff === m) {
    min = m;
    break;
  }
}

console.log(min);