const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const haveNumber = input[1].split(" ").map(Number); //가지고 있는 숫자
const checkNumber = input[3].split(" ").map(Number); //체크할 숫자

const object = {}; //haveNumber에 담긴 숫자들을 각 개수와 함께 담을 객체
haveNumber.forEach((n) => {
  object[n] ? object[n]++ : (object[n] = 1); //이미 있으면 +1 없으면 1을 넣음
});

const answer = [];
checkNumber.forEach((n) => {
  answer.push(object[n] ? object[n] : 0); //checkNumber에 담긴 숫자가 object에 있으면 그 개수를, 없으면 0을 answer에 넣음
});
console.log(answer.join(" "));
