function solution(clothes) {
  let categoryCounts = {};

  // 배열을 순회하면서 카테고리별 옷의 수 세기
  for (let i = 0; i < clothes.length; i++) {
    let category = clothes[i][1];
    if (categoryCounts[category]) {
        categoryCounts[category]++;
    } else {
        categoryCounts[category] = 1; // {"headgear":2,"eyewear":1}
    }
  }

  // 경우의 수 계산
  let answer = 1;
  for (let count in categoryCounts) {
    answer *= (categoryCounts[count] + 1);
  }

  return answer -1 ; // 아무것도 입지 않는 경우 빼기
}