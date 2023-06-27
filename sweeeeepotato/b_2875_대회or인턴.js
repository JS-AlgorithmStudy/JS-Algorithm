const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const solution = (input) => {
  let [women, men, intern] = input.map(Number);
  let teamCount = 0;

  while (women >= 2 && men >= 1 && (women + men - 3) >= intern) {
    teamCount++;
    women -= 2;
    men--;
  }


  return teamCount;
};

console.log(solution(input));
