//소수 판별
function isPrime(num) {
  if (num <= 1) return false;

  //해당 숫자의 제곱근까지만 체크
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let primeCount = 0; //소수 개수
  let numbers = n.toString(k).split("0"); // n을 k진수로 변환 후 0을 기준으로 자름

  numbers.forEach((number) => {
    //비어있지 않은 요소만
    if (number !== "") {
      const num = +number; //문자열을 숫자로 변환
      if (isPrime(num)) primeCount++; //소수면 primeCount+1
    }
  });

  return primeCount;
}
