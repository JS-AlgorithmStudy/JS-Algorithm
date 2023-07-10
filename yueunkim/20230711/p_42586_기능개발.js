function solution(progresses, speeds) {
  let needDay = []; //기능별로 완료되기까지 필요한 날
  let baepo = [];

  //기능별 완료되기까지 필요한 날 구하기
  for (let i = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    needDay.push(day); // needDay = [5, 10, 1, 1, 20, 1]
  }

  let compareDay = needDay[0];
  let count = 1;

  for (let i = 1; i < needDay.length; i++) {
    if (needDay[i] > compareDay) {
      baepo.push(count);
      compareDay = needDay[i];
      count = 1;
    } else {
      count++;
    }
  }

  baepo.push(count); //baepo = [1, 3, 2]
  return baepo;
}
