function solution(prices) {
  let n = prices.length;
  let answer = Array(n).fill(0);
  let stack = [];
  for (let i = 0; i < n; i++) {
    // 주식 가격이 떨어졌을 경우
    while (stack.length !== 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 스택의 제일 위에 값을 꺼내서 answer 계산
      let j = stack.pop();
      answer[j] = i - j;
    }
    // 떨어지지 않으면 스택에 담기
    stack.push(i);
  }
  // console.log(stack)
  while (stack.length) {
    let j = stack.pop();
    answer[j] = n - 1 - j;
  }
  // console.log(answer);
  return answer;
}
