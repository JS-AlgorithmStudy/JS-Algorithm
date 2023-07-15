function solution(orders, course) {
  let answer = [];
  let temp = [];
  let cases = {}; // 모든 조합을 담는 객체

  function DFS(L, number, order, start) {
    if (L === number) {
      let copyTemp = [...temp]; // temp 배열을 그냥 정렬하면 ['X','Y'] 가 ['W','Y'] 가 된다....진짜 어이없는데 이유를 모르겠다ㅠ 그래서 결국 복사함......
      copyTemp.sort();
      cases[copyTemp.join("")]
        ? cases[copyTemp.join("")]++
        : (cases[copyTemp.join("")] = 1);
    } else {
      for (let i = start; i < order.length; i++) {
        temp.push(order[i]);
        DFS(L + 1, number, order, i + 1);
        temp.pop();
      }
    }
  }

  for (let number of course) {
    for (let order of orders) {
      order = order.split("");
      DFS(0, number, order, 0);
    }
  }
  // console.log(cases)
  let arr = [];
  let targetKey;
  for (let number of course) {
    let max = 0;
    for (let key in cases) {
      if (key.length === number) {
        max = Math.max(max, cases[key]);
      }
    }
    if (max !== 1) {
      arr.push(max);
    }
  }
  for (let i = 0; i < course.length; i++) {
    for (let key in cases) {
      if (key.length === course[i] && cases[key] === arr[i]) {
        answer.push(key);
      }
    }
  }
  return answer.sort();
}
