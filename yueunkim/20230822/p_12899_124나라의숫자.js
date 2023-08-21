function solution(n) {
  let answer = "";
  let q = Math.floor(n / 3); // 몫
  let r = n % 3; // 나머지

  // 3의 배수이면
  if (r == 0) {
    q -= 1;
    r = 4;
  }

  // 몫이 3이상이면
  if (q >= 3) {
    q = solution(q);
  }
  answer = String(q) + String(r);
  return String(Number(answer));
}
