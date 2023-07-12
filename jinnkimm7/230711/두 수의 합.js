const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230711/두 수의 합.txt').toString().split('\n');

const numArr = input[1].split(' ').map(Number); // 수열
const x = Number(input[2]); // 타겟넘버

numArr.sort((a, b) => a - b); // 투포인터를 사용하기 위해 오름차순 정렬은 해준다.

let answer = 0;
let start = 0;
let end = numArr.length - 1;

while (true) {
  const sum = numArr[start] + numArr[end];
  if (sum === x) { // 두 수의 합이 같을 경우 start와 end를 좁혀준다.
    answer++;
    start += 1;
    end -= 1;
  }
  // 두 수의 합이 x보다 클 경우, 타겟넘버인 x로 가기 위해 end를 좁혀준다. (sum이 감소함)
  else if (sum > x) end -= 1;
  // 두 수의 합이 x보다 작을 경우, 타겟넘버인 x로 가기 위해 start를 좁혀준다. (sum이 증가함)
  else if (sum < x) start += 1;

  if (start >= end) break;
}

console.log(answer);