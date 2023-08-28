function solution(queue1, queue2) {
  const totalArray = [...queue1, ...queue2]; // 두 큐 합치기
  const totalSum = totalArray.reduce((acc, val) => acc + val); // 두 큐의 총합
  const targetSum = totalSum / 2; // 목표값

  // 두 포인터
  let start = 0;
  let end = queue1.length;
  let currentSum = queue1.reduce((acc, val) => acc + val); // 현재 queue1의 합

  let count = 0;
  const max = 2 * totalArray.length; // 최대로 움직일 수 있는 횟수

  while (count < max) {
    if (currentSum === targetSum) {
      return count;
      //  두 포인터 내에 있는 모든 원소의 합이 목표값보다 클 때
    } else if (currentSum > targetSum) {
      currentSum -= totalArray[start];
      start++;
      //  두 포인터 내에 있는 모든 원소의 합이 목표값보다 작을 때
    } else {
      currentSum += totalArray[end];
      end++;
    }
    count++;
  }

  return -1; // 불가능한 경우
}
