function solution(numbers, target) {
  let answer = 0;
  let n = numbers.length;
  function DFS(L, sum) {
    if (L === n) {
      if (sum === target) {
        answer++;
      }
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  }
  DFS(0, 0);
  return answer;
}
