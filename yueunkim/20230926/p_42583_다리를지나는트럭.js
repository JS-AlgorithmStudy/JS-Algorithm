// queue (선입선출)

// 1. 길이가 bridge_length이고 0으로 채워진 다리 bridge

// 대기 트럭 없을 때까지 다음을 반복
// 2. bridge shift
// 3. 현재 다리에 있는 트럭 + 들어갈 트럭 무게의 합이 weight보다 작으면 트럭 추가, time++
// 4. 아니면 0 추가, time++

function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0); // 다리
  let time = 0; // 경과 시간

  // 대기 트럭이 없을 때까지
  while (truck_weights.length) {
    bridge.shift();

    // 현재 다리 위의 트럭 무게와 들어갈 트럭의 무게 합이 weight보다 작거나 같으면 트럭 넣기
    if (bridge.reduce((a, b) => a + b) + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
      time++;
      // 더 크면 0넣기
    } else {
      bridge.push(0);
      time++;
    }
  }

  return time + bridge_length; // 다리 길이 더해주기
}
