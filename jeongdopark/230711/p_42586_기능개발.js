// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// 11:30


// 하루 while

const solution = (progresses, speeds) => {
  let answer = [];

  while(progresses.length > 0){
    let count = 0;
    let isPos = false;
    // let copy_progresses = [...progresses]
    
    for(let i=0; i<progresses.length; i++){
      if(i === 0){
        progresses[i] += speeds[i]
        if(progresses[i] >= 100){
          isPos= true;
          count += 1;
        }
      }else{
        progresses[i] += speeds[i]
        if(isPos && progresses[i] >= 100) count += 1;
        }
      }
      
      if(count > 0){
        answer.push(count)
        for(let j=0; j<count; j++){
          progresses.shift()
        }
      }
    }
  return answer;
}