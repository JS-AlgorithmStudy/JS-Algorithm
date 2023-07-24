function solution(routes) {
  // 오름차순 정렬
  routes.sort((a, b) => a[0] - b[0]); // [[-20,-15],[-18,-13],[-14,-5],[-5,-3]]
  let camera = 1;
  let [enter, out] = routes[0]; // enter:고속도로에 진입한 지점, out:나간 지점

  for (const car of routes) {
    // 현재 처리 중인 자동차의 나간 시간보다 다음 자동차의 진입 시간이 크다면
    if (out < car[0]) {
      camera++; // 카메라+1
      [enter, out] = car; // 현재 자동차의 enter, out을 다음 자동차의 값으로 업뎃

      // 다음 자동차가 현재 처리 중인 자동차 경로 범위 안에 있다면
    } else if (enter <= car[0] && car[1] <= out) {
      [enter, out] = car; // 현재 자동차의 enter, out을 다음 자동차의 값으로 업뎃
    }
  }

  return camera;
}
