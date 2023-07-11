function solution(orders, course) {
  let answer = [];
  let obj = {};

  // course에서 주어진 요소값 만큼의 조합들을 모아서 obj에 저장하는 반복문
  course.map((num) => {
    orders.forEach((menu) => {
      combination(menu.split(""), num).map((el) => {
        const word = el.sort().join("");
        obj[word] = (obj[word]|0) + 1;
      });
    });
  });
    
  // 모아진 조합들 중에서 가장많이 주문되었던 조합들만 answer 배열에 다시 모아주는 반복문
  course.map((num) => {
    let maxNum = 0;
    for (const key in obj) {
      if (obj[key] === 1) continue;
      if (key.length === num && obj[key] > maxNum) {
        maxNum = obj[key];
      }
    }
    let temp = Object.keys(obj).filter((key) => {
      return obj[key] === maxNum && key.length === num;
    });
    temp.map((el) => answer.push(el));
  });

  return answer.sort();
}

// 숫자 조합 함수
function combination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fix, idx, array) => {
    const restArray = array.slice(idx + 1);
    const combiArr = combination(restArray, num - 1);
    const combiFix = combiArr.map((el) => [fix, ...el]);

    result.push(...combiFix);
  });

  return result;
}