// https://school.programmers.co.kr/learn/courses/30/lessons/42888
// ENTER 입장
// LEAVE 퇴장
// CHANGE 닉네임 변경

// solve ) 입력 데이터 record 순회하며 앞에 키워드 추출
// ENTER과 LEAVE만 따로 추출
// 2중 for문 시간초과될 느낌

const solution = (record) => {
  const answer = [];
  const temp_ans = [];
  let user = {}
  // 입력 데이터 record 순회
  for(let i=0; i<record.length; i++){
    const [keyword, userId, nickname] = record[i].split(' ');
    
    switch(keyword){
      case('Enter'):
        // 첫 입장일 경우 user객체에 등록
        if(!user[userId]){
          user[userId] = nickname
        }else{
          // 밖에서 닉네임이 변경되었을 경우
          if(user[userId] !== nickname){
            user[userId] = nickname
          }
        }
        temp_ans.push([userId, 'Enter'])
        break
      case('Change'):
        user[userId] = nickname
        break
      case('Leave'):
        temp_ans.push([userId, 'Leave'])
        break
    }
  }
  
  // temp_ans 모양
  // [
  //   [ 'uid1234', 'Enter' ],
  //   [ 'uid4567', 'Enter' ],
  //   [ 'uid1234', 'Leave' ],
  //   [ 'uid1234', 'Enter' ]
  // ]
  // temp_ans 순회
  for(let i=0; i<temp_ans.length; i++){
    if(temp_ans[i][1] === 'Enter'){
      answer.push(`${user[temp_ans[i][0]]}님이 들어왔습니다.`)
    }else{
      answer.push(`${user[temp_ans[i][0]]}님이 나갔습니다.`)
    }
  }
  return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])