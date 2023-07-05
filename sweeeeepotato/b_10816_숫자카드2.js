const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const myCardList = input[1].split(" ");
  const searchCard = input[3].split(" ");
  const obj = {};
  let result = [];

  // 상근이가 가진 정수카드가 각각 몇개씩 있는지 계산하여 객체 생성
  myCardList.forEach((val) => {
    obj[val] = (obj[val] || 0) + 1;
  });

  // 주어진 카드(상근이가 몇개 가지고있는지 확인해야하는 카드)가
  // 객체에 존재하면 해당 value값을 push, 존재하지 않으면 0을 push
  searchCard.forEach((val) => {
    result.push(obj[val] || 0);
  });

  return result;
};

console.log(...solution(input));
