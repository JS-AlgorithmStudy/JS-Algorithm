function solution(elements) {
  let answer = 0;
  let len = elements.length;
  let cases = new Set();

// 시작이 start index이고, 시작 위치부터 길이가 1부터 len까지의 부분수열을 만들어서 합을 cases에 더한다.
  function getSum(start) {
      let subsequence = [];
      for (let i = start; i < 2 * len; i++) {
          if (subsequence.length < len) {
              subsequence.push(elements[(i % len)]);
              cases.add(subsequence.reduce((a,b) => a + b));
          } else break;
      }
      
  }
  // 시작 위치를 바꿔가며 getSum 함수를 실행한다.
  for (let start = 0; start < len; start++) {
      getSum(start);
  }
  answer = cases.size;
  return answer;
}