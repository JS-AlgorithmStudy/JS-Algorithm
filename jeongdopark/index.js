// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// 7/6 목 11:30 - 11:45


// 하루 while
// 첫 번째 작업이 배포 가능해야 연속 카운팅.

const solution = (progresses, speeds) => {
  let answer = [];

  // while loop 한 번이 하루
  while(progresses.length > 0){
    // 배포 가능한 개수
    let count = 0;
    // 배포 가능한지 boolean 
    let isPos = false;

    for(let i=0; i<progresses.length; i++){
      // 첫 번째 작업 배포 여부가 중요함.
      // 첫 번째 작업 배포가 안 될 경우 나머지 작업도 안 됨.
      // i === 0 첫 번째 작업에서 isPos 변수 boolean 결정
      progresses[i] += speeds[i]
      if(i === 0){
        if(progresses[i] >= 100){
          isPos= true;
          count += 1;
        }
      }else{
        if(isPos && progresses[i] >= 100){ 
            count += 1;
          }else{
            isPos = false;
          }      
        }
      }
      
      // 배포 가능한 개수 만큼 progress, speeds shift()
      if(count > 0){
        answer.push(count)
        for(let j=0; j<count; j++){
          progresses.shift()
          speeds.shift()
        }
      }
    }
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]	));