// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
  let answer = 0;

  // 재귀 함수
  const recur = (dep, sum) => {
    // 재귀 depth가 numbers.length일 경우 return
    if (dep === numbers.length) {
      // 합이 target과 같으면 answer += 1
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    // +
    recur(dep + 1, sum + numbers[dep]);
    // -
    recur(dep + 1, sum - numbers[dep]);
  };
  // dep = 0, sum = 0으로 시작
  recur(0, 0);

  return answer;
};
