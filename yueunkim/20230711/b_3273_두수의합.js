const input = require("fs")
  .readFileSync("/dev/stdin")
  // .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const haveNumber = input[1].split(" ").map(Number); //가지고 있는 숫자
const makeNumber = input[2]; //만들어야 할 숫자
let answer = 0;

const numberSet = new Set(haveNumber);

for (let i = 0; i < haveNumber.length; i++) {
  let target = makeNumber - haveNumber[i];
  if (numberSet.has(target) && haveNumber[i] !== target) answer++; //같은 숫자를 두 번 사용하는 경우 제외
}

console.log(answer / 2); //중복이 있으므로 2로 나눔
