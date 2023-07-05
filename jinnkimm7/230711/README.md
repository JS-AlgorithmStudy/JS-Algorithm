# 230711
1. [메뉴 리뉴얼 - Lv2](https://school.programmers.co.kr/learn/courses/30/lessons/72411)
2. [두 수의 합 - 실버3](https://www.acmicpc.net/problem/3273)
3. [n진수 게임 - Lv2](https://school.programmers.co.kr/learn/courses/30/lessons/17687)
4. [기능개발 - Lv2](https://school.programmers.co.kr/learn/courses/30/lessons/42586)
5. [30 - 실버4](https://www.acmicpc.net/problem/10610)

---
# 230705 - 두 수의 합(투포인터)
## 내 풀이
```javascript
const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230711/두 수의 합.txt').toString().split('\n');

const n = Number(input[0]); // 수열의 크기
const numArr = input[1].split(' ').map(Number); // 수열
const x = Number(input[2]); // 타겟넘버

numArr.sort((a, b) => a - b);

let answer = 0;

for (let start = 0; start < numArr.length; start++) {
  let end = numArr.length - 1;

  while (end !== start) {
    const sum = numArr[start] + numArr[end];
    if (sum === x) {
      answer++;
      break;
    }
    // else if (sum < x) break; -> 탐색 범위를 더 줄이고 싶어서 이 구문을 넣었는데 왜 시간 초과가 될까??
    end--;
  }
}
console.log(answer);
```
- 1 ≤ n ≤ 100000의 범위이기 때문에 O(N^2)은 불가능하다고 판단했다.
  - [문제 첫 접근 하는 방법 | 코딩테스트](https://www.youtube.com/watch?v=n-_u0fQHsb8)
- 위와 같은 풀이를 했고, 탐색 범위를 최대한 줄이도록 노력했다.
  - 정답이지만 4944ms의 걸렸다.

## 다른 풀이
```javascript
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
```
- 탐색의 범위를 조금더 줄이려고 생각해보았다.
- 문제의 조건 중 `서로 다른 양의 정수의 배열`이라는 점을 이용해 start도 함께 이동시켰다.
- 216ms


## 참고
- [투포인터 알고리즘](https://velog.io/@jinnkimm7/%ED%88%AC%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)