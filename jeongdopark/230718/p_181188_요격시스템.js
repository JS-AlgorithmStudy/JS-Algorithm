// solve ) 
// 미사일을 최소로 사용해서 모든 폭격 미사일을 요격하려한다.

// A나라 x축에 평행하게 (s, e) -> s와 e는 요격할 수 없다. s초과 e미만
// B나라 y축에 수평하게 ()
// 
// solve)
// 정렬이 필요함.
// 

const solution = (targets) => {
  const targets = targets.sort((a, b) => b[0] - a[0])
  console.log(targets);
  var answer = 0;
  return answer;
}

solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]])