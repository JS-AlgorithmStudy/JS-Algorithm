const solution = (n, k) => {

  // 소수 판별 함수
const valid = (num) => {
  if(num <= 1){
      return false
  }
  if(num === 2){
      return true;
  }
  for(let i=3; i<=parseInt(Math.sqrt(num)); i+=2){
      if(num % i === 0){
          return false;
      }
  }
  return true;
}

var answer = 0;

// k진수로 바꿔준다
let change_num = String(n.toString(k));
let target_num = '';

// k진수로 바뀐 string 순회
for(let i=0; i<change_num.length; i++){
  // 0이 아닌 경우 string 누적 저장
  if(change_num[i] !== '0'){
      target_num += String(change_num[i]);

  // 0인경우
  }else{
      // 누적된 string 소수판별
      if(valid(Number(target_num))){
          answer += 1;
      }
      target_num = '';
  }
}

if(target_num !== ''){
  if(valid(Number(target_num))){
      answer += 1;
  }
}

return answer;
}

