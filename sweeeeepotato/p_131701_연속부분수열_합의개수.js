// #1. reduce를 이용한 풀이
function solution(elements) {
  // 증복된 값을 제거하기 위해 Set 사용
  const result = new Set(elements);

  for (let i = 0; i < elements.length; i++) {
    elements.reduce((acc, cur) => {
      result.add(acc + cur);
      return acc + cur;
    });
    
    elements.push(elements[0]);
    elements.shift();
  }

  return result.size;
}


// #2. 이중 for문을 이용한 풀이
function solution(elements) {
  // 증복된 값을 제거하기 위해 Set 사용
  const result = new Set(elements);

  for (let i = 0; i < elements.length; i++) {
    let sum = elements[i];

    for (let j = i + 1; j < elements.length + i; j++) {
      sum += elements[j % elements.length];
      result.add(sum);
    }
  }

  return result.size;
}
