// 고민
// 처음에는 투포인터 생각해서 Range잡아서 slice로 자르고 자른 부분 더하는 식으로 하려했음
// 하지만 left_pointer가 마지막 요소를 right_pointer가 첫 번째 요소를 가리킨다면
// 어떻게 구현하지 ?
// [7, 9, 1, 1, 4] -> 4, 7, 9를 

// for문으로 문제풀이 방향 바꿈

const solution = (elements) => {
  let answer = 0;
  let answer_set = new Set();
  
  // i는 길이가 i인 수열
  for(let i=0; i<elements.length; i++){
    let answer = 0;
    for(let k=0; k<elements.length; k++){
      if(i === 0){
        answer = elements[k]
        answer_set.add(answer)
        answer = 0;
        continue
      }
      // k부터 k+i 더한다
      for(let j=k; j<=k+i; j++){
        if(j >= elements.length){
          temp = j%elements.length
          answer += elements[temp]
        }else{
          answer += elements[j]
        }
        
      }
      answer_set.add(answer)
      answer = 0;
    }
  }
  return answer_set.size
}