function solution(n, s) {
  let answer = [];

  //s가 n보다 작아서 집합을 만들 수 없는 경우
  if (s < n) {
    answer.push(-1);
    return answer;
  }

  //나누어 떨어지는 경우
  if (s % n === 0) {
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(s / n));

      //나누어 떨어지지 않는 경우
    }
  } else {
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(s / n));
    }
    //1씩 나머지만큼 더해줌
    for (let j = 0; j < s % n; j++) {
      answer[j] += 1;
    }
  }

  //오름차순 정렬
  answer.sort((a, b) => a - b);

  return answer;
}
