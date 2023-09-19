// 2중 For문 10^6 * 10^6 시간 복잡도 너무 크다
// 1. Stack 자료구조
// 상승세일 때 stack에 담는다.
// 하락세일 경우 stack 맨 위에 있는 요소와 비교하면서, 맨 위 요소가 더 작을 경우 pop

const solution = (prices) => {
  const stack = [];
  const answer = Array(prices.length).fill(0);
  const N = prices.length - 1;
  for (let i = 0; i < prices.length; i++) {
    // 스택이 비어 있을 경우
    if (stack.length === 0) {
      stack.push([prices[i], i]);
    } else {
      while (stack.length !== 0) {
        const top_number = stack[stack.length - 1][0];
        // 스택 가장 위에 있는 숫자보다 현재 숫자가 같거나 클 경우
        if (top_number <= prices[i]) {
          stack.push([prices[i], i]);
          break;
          // 하락세
        } else {
          const [price, idx] = stack.pop();
          answer[idx] = i - idx;
          if (stack.length === 0) {
            stack.push([prices[i], i]);
            break;
          }
        }
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    answer[stack[i][1]] = N - stack[i][1];
  }
  return answer;
};

console.log(solution([1, 2, 3, 2, 3]));
