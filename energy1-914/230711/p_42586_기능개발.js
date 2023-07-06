function solution(progresses, speeds) {
  let answer = [];
  let finishDays = []; // 기능이 각각 며칠 후에 완성되는지 확인하는 배열
  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    finishDays.push(day);
  }
  // console.log(finishDays);

  while (finishDays.length > 0) {
    let target = finishDays.shift();
    let count = 1;
    while (finishDays[0] <= target) {
      count++;
      finishDays.shift();
    }
    answer.push(count);
  }
  return answer;
}
