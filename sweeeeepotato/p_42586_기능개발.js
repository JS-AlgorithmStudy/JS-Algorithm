function solution(progresses, speeds) {
  const result = [];
  // 100에서 현재 진행도를 빼면 남은 진행도가 되는데 그것을 작업속도로 나눈뒤 올림을 해주면 완성되기까지 며칠이 남았는지 알 수 있음
  // 우선 completionTime변수에 가장 먼저 배포되는 작업의 남은 일수를 저장
  let completionTime = Math.ceil((100 - progresses[0]) / speeds[0]);
  let count = 1;

  for (let i = 1; i < progresses.length; i++) {
    // completionTime의 값이 다음 작업의 남은 일수보다 작을 경우, 배포 할 수 있는 작업은 count만큼이므로 result 배열에 그 개수를 push한 뒤, count값을 다시 1로 초기화
    // 그리고 completionTime에 그 다음에 배포될 첫번째 작업으로 바꿔줌
    if (completionTime < Math.ceil((100 - progresses[i]) / speeds[i])) {
      result.push(count);
      count = 1;
      completionTime = Math.ceil((100 - progresses[i]) / speeds[i]);
    } else {
      // completionTime의 값이 다음 작업의 남은 일수보다 클 경우, 같이 배포할 수 있는 작업수가 증가되므로 count를 증가시킴
      count++;
    }
  }
  result.push(count);

  return result;
}

