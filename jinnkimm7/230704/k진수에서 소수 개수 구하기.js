function isPrime(number) {
  if (number <= 1) return false;
  // 소수인지 판별하기 => 해당 숫자의 제곱근까지 체크
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  // toString(k) => k진수로 변환
  const arr = n.toString(k).split(0);
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(Number(arr[i]))) answer++;
  }
  return answer;
}