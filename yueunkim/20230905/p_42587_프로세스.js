function solution(priorities, location) {
  // 중요도와 인덱스를 함께 저장
  let queue = [];
  for (let i = 0; i < priorities.length; i++) {
    queue.push([priorities[i], i]); // queue = [[2,0], [1,1], [3,2], [2,3]]
  }

  let count = 0; // 몇 번째로 출력되는지 카운트

  while (true) {
    let [currentPriority, currentIndex] = queue.shift();
    let moreHigh = false;

    // 우선순위가 더 높은게 있는지 확인
    for (let i = 0; i < queue.length; i++) {
      if (queue[i][0] > currentPriority) {
        moreHigh = true;
        break;
      }
    }

    if (moreHigh) {
      queue.push([currentPriority, currentIndex]);
    } else {
      count++;

      if (currentIndex === location) {
        return count;
      }
    }
  }
}