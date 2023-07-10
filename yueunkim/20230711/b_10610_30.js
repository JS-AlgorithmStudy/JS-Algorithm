const input = require("fs")
  .readFileSync("/dev/stdin")
  // .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const number = input[0];
const numberSplit = number.split("");

//모든 자리수 합
let sum = 0;
for (let i = 0; i < numberSplit.length; i++) {
  sum += parseInt(numberSplit[i]);
}

//0이 들어있지 않거나 모든 자리수의 합이 3의 배수가 아니면 -1출력
if (!numberSplit.includes("0") || sum % 3 !== 0) console.log(-1);
else {
  //가장 큰 수를 출력하고 싶으므로 내림차순 정렬
  const answer = numberSplit.sort((a, b) => b - a).join("");
  console.log(answer);
}
