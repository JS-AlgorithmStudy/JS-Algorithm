function solution(n, k) {
  let result = 0;

  // k진수로 변환후 0을 기준으로 나눠 새로운 배열을 만든뒤, 
  // 빈배열이거나 값이 1보다 큰 경우만 모아 다시 새로운 배열 생성
  // 1은 소수가 아니므로 1보다 큰 경우를 취합
  const arr = n
    .toString(k)
    .split(0)
    .filter((val) => {
      if (val !== "" && val > 1) {
        return val;
      }
    });

  for (val of arr) {
    // 배열에 있는 각 요소가 소수인지 아닌지 판단하기 위한 변수
    // 소수는 1과 자기 자신만으로 나누어 떨어지기 때문
    let count = 0;

    // 어떤 수든 1로 나눈 나머지가 0이므로 2부터 시작함
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) count++;
    }

    // 1로 나머지를 구하는건 배제했기 때문에 
    // count가 0이어야만 소수이므로 result값을 1증가
    if (count == 0) result++;
  }

  return result;
}
