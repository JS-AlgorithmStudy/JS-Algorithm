function solution(n, t, m, p) {
  let answer = [];
  let arr = [];
  for (let i = 0; arr.length < m * t; i++) {
    arr.push(...i.toString(n).toUpperCase().split(""));
  }
  // console.log(arr)
  let turn = 0;
  while (answer.length < t) {
    let number = arr.shift();
    if (turn + 1 === p) {
      answer.push(number);
    }
    turn = (turn + 1) % m;
  }
  // console.log(answer)
  return answer.join("");
}
