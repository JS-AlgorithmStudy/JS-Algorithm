function solution(n, t, m, p) {
  const numArr = [];
  const result = [];

  // 숫자 0부터 시작하여 각 숫자를 n진수로 변환한뒤, 각 자리수를 분리하여 숫자배열에 넣어줌
  // 이 때 숫자배열의 개수가 (튜브가 말해야하는 숫자개수 * 총 사람수)보다 작을때만 실행
  for (let i = 0; numArr.length < t * m; i++) {
    const revert = i.toString(n);
    numArr.push(...revert.split(""));
  }

  // 숫자배열의 개수를 (튜브가 말해야하는 숫자개수 * 총 사람수)만큼으로만 잘라줌
  numArr.splice(t * m);

  // 튜브가 말해야하는 숫자만 모아주는 반복문
  for (let i = 0; i < numArr.length; i += m) {
    // 숫자배열을 사람수만큼만 잘라서 임시배열에 넣어줌
    const temp = numArr.slice(i, i + m);
    // 튜브 순서에 해당하는 값을 결과배열에 넣어줌
    result.push(temp[p - 1]);
  }

  return result.join("").toUpperCase();
}
