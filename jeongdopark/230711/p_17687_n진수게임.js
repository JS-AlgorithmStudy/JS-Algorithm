// https://school.programmers.co.kr/learn/courses/30/lessons/17687

// n : 진법
// t : 숫자의 개수
// m : 참가 인원
// p : 튜브의 순서
// 튜브가 말해야할 숫자를 출력
// 0 1 10 11 100
// 0111

// 튜브가 미리 알고 있어야하는 숫자 t개
// t를 카운트할 변수
// 
const solution = (n, t, m, p) => {
  let answer = '';
  let count = 0;
  let number = 0;
  let member_pointer = 1;
  while(count !== t){
    let change_number = number.toString(n);
    
    for(let i=0; i<change_number.length; i++){
      if(member_pointer === p){
        count += 1;        
        answer += change_number[i].toUpperCase();
        if(count === t) break
      }
      member_pointer += 1;
      if(member_pointer > m){
        member_pointer = 1;
      }
    }
    number += 1;
  } 
  return answer;
}

console.log(solution(16, 16, 2, 1));