function solution(n, k) {
  let answer = 0;
  let k_number = "";

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / k));
      k_number += L % k;
    }
  }
  function isPrime(number) {
    if (number === 2) return true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  DFS(n);

  k_number = k_number
    .split("0")
    .map(x => +x)
    .filter(x => x !== 1 && x !== 0);
    
  k_number.map(x => {
    if (isPrime(x)) answer++;
  });

  return answer;
}
