// 최대공약수
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function solution(W, H) {
  return W * H - (W + H - gcd(W, H));
}
