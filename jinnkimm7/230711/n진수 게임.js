function solution(n, t, m, p) {
  const numbers = new Array(t * m)
    .fill(0).map((v, i) => v + i)
    .map(v => v.toString(n).toUpperCase()).join('');

  const temp = [];
  for (let i = 0; i < numbers.length; i += m) {
    temp.push(numbers.slice(i, i + m));
  }

  let answer = '';
  for (let i = 0; i < t; i++) {
    answer += temp[i][p - 1];
  }

  return answer;
}