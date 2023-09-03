function solution(clothes) {
  let answer = 1;
  let list = {};
  for (let item of clothes) {
    list[item[1]] ? list[item[1]]++ : (list[item[1]] = 1);
  }
  for (let x of Object.values(list)) {
    answer = answer * (x + 1);
  }
  answer -= 1;
  return answer;
}
