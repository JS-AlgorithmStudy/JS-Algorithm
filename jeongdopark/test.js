// 모든 트럭 다리를 건너려면 몇 초가 걸리는지
// 다리 : 최대 제한 트럭 개수 & 무게 제한
// 다리에 완전히 오르지 않은 트럭 무게는 무시한다.

// bridge_length : 다리에 올라올 수 있는 트럭 수
// weight : 다리 무게 제한
// truck_weights : 트럭 별 무게
const solution = (bridge_length, weight, truck_weights) => {
  var answer = 0;
  // 다리 위 트럭 queue
  const queue = [];
  // 다리 위 총 트럭 무게
  let queue_weight = 0;

  while (truck_weights.length > 0) {
    answer += 1;
    // 다리 위에 트럭이 있을 경우
    if (queue.length !== 0) {
      // 모든 트럭 한칸씩 이동
      for (let i = 0; i < queue.length; i++) {
        queue[i][1] += 1;
      }
      // 가장 앞에 있는 트럭이 다리를 건넜을 경우
      if (queue[0][1] === bridge_length + 1) {
        queue_weight -= queue[0][0];
        queue.shift();
      }
    }
    // 현재 다리 위 총 트럭 무게 + 들어올 트럭 <= 다리가 견딜 수 있는 무게
    if (queue_weight + truck_weights[0] <= weight) {
      // [트럭 무게, 초]
      const crnt_truck = [truck_weights[0], 1];
      queue.push(crnt_truck);
      queue_weight += crnt_truck[0];
      truck_weights.shift();
    }
  }
  return answer + bridge_length;
};

console.log(solution(100, 100, [10]));
