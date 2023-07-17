function solution(targets) {
  // 오름차순 정렬
  targets.sort((a, b) => a[0] - b[0]); // [[1,4],[3,7],[4,5],[4,8],[5,12],[10,14],[11,13]]
  let launch = 0; // 요격 미사일 발사 횟수
  let [s, e] = [0, 0]; // s:미사일의 도착 시간, e:파괴 시간

  for (const missile of targets) {
    // 현재 처리 중인 미사일의 파괴 시간보다 다음 미사일의 도착 시간이 크거나 같다면
    if (e <= missile[0]) {
      launch++; // 발사
      [s, e] = missile; // 현재 미사일의 s, e을 다음 미사일의 값으로 업뎃

      // 다음 미사일이 현재 처리 중인 미사일 범위 안에 있다면
    } else if (s <= missile[0] && missile[1] <= e) {
      [s, e] = missile; // 현재 미사일의 s, e을 다음 미사일의 값으로 업뎃
    }
  }

  return launch;
}
