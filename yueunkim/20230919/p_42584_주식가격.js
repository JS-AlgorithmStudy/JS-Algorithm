function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let time = 0;

    for (let j = i + 1; j < prices.length; j++) {
      time++;

      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(time);
  }
  return answer;
}
