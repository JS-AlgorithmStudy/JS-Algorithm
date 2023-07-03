function solution(elements) {
  const result = new Set();

  //i는 묶을 요소의 개수
  for (let i = 1; i <= elements.length; i++) {
    //j는 묶을 요소들의 시작 인덱스
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;

      //k는 더해질 요소들의 인덱스
      for (let k = 0; k < i; k++) {
        //인덱스가 배열의 길이를 넘어갈 경우 인덱스 순환
        sum += elements[(j + k) % elements.length];
      }
      result.add(sum); //중복 아닌 것 추가
    }
  }

  return result.size;
}
