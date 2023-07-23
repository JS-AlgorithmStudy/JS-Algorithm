const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230725/회의실 배정.txt').toString().split('\n');

const N = Number(input[0]); // 회의의 갯수
const times = []; // 회의 시간
for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  times.push([start, end]);
}

// 회의 끝나는 시간 순으로 정렬하고, 만약 끝나는 시간이 같다면 회의가 시작하는 순서로 정렬한다.
times.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let answer = 0;
let endTime = times[0][1];

for (let i = 1; i < times.length; i++) {
  let nextStart = times[i][0];
  if (nextStart >= endTime) {
    answer++;
    endTime = times[i][1];
  }
}

console.log(answer + 1);