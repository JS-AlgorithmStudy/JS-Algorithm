// 소수
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// 최대 공약수 두 번째 최댓값
function secondLargestDivisor(n) {
  for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (n % i === 0) {
      return n / i;
    }
  }
}

// 
const solution = (begin, end) => {
    var answer = [];
    
    for(let i=begin; i<=end; i++){
      if(i===1){
        answer.push(0)
      }
      if(!isPrime(i)){
        answer.push(1)
      }else{
        answer.push(secondLargestDivisor(i));
      }
    }

    return answer;
}

solution(1, 10)