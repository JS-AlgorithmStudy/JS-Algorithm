function solution(n) {
  let answer = [];
  while (n) {
    if (!(n % 3)) {
      answer.push(4);
      n = Math.floor(n / 3) - 1;
    } else {
      answer.push(n % 3);
      n = Math.floor(n / 3);
    }
  }
  return answer.reverse().join("");
}
