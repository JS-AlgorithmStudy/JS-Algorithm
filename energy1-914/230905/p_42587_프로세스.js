function solution(priorities, location) {
  let answer = 0;
  let len = priorities.length;
  let max = Math.max(...priorities);
  let orderArr = [];
  for (let i = 0; i < len; i++) {
    orderArr.push(i);
  }
  while (priorities.length) {
    max = Math.max(...priorities);
    let target = priorities.shift();
    if (target !== max) {
      priorities.push(target);
      orderArr.push(orderArr.shift());
    } else {
      let index = orderArr.shift();
      answer++;
      if (index === location) return answer;
    }
  }
  return answer;
}
