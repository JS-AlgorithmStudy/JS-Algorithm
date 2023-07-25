// solve ) 
// 미사일을 최소로 사용해서 모든 폭격 미사일을 요격하려한다.

// A나라 x축에 평행하게 (s, e) -> s와 e는 요격할 수 없다. s초과 e미만
// B나라 y축에 수평하게 ()
// 
// solve)
// 정렬이 필요함.
// 오름차순 ? 내림차순 ?

const solution = (targets) => {
  // 내림차순 , 오름차순으로 할 경우 딱 떨어지지 않음
  // [ [ 11, 13 ], [ 10, 14 ], [ 5, 12 ], [ 4, 5 ], [ 4, 8 ], [ 3, 7 ], [ 1, 4 ] ]
  const targets_sort = targets.sort((a, b) => b[0] - a[0])
  // 가장 첫 번째 요격은 정렬된 첫 번째 시작점
  let missile = targets_sort[0][0];
  // 필요한 미사일 개수
  var answer = 0;

  // 정렬된 입력값 순회
  for(let i=0; i<targets_sort.length; i++){
    // [11, 13]
    const [start, end] = targets_sort[i];
    // 미사일이 현재 end값과 같거나 작을 경우 미사일 업데이트 & 미사일 개수 +1
    if(missile <= end){
      missile = start;
      answer += 1;
    }
  } 
  
  return answer;
}

solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]])