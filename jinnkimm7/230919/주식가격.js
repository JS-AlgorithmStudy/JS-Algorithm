function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) count++;
      else {
        count++;
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

