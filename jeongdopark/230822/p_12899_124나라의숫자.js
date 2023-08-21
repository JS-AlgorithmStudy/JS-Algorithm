// https://school.programmers.co.kr/learn/courses/30/lessons/12899
// 1, 2, 4
// 11, 12, 14
// 21, 22, 24
// 41, 42, 44
// 111, 112, 114
// 121, 122, 124
// 141, 142, 144
// 111, 112, 114
// 121, 122, 124
// 141, 142, 244
// 111, 112, 114
// 121, 122, 124
// 141, 142, 444

// 고민 끝에 풀지 못해서 구글링했습니다

function solution(n) {
  var answer = '';
  while(n/3) {
          if(n%3) {
              answer+=n%3;
              n = parseInt(n/3);
          }
          else {
              answer+=4;
              n = parseInt(n/3)-1;
          }
  }
  return answer.split("").reverse().join("");
  
}