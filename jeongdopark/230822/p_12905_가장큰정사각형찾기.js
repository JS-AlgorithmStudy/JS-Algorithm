// https://school.programmers.co.kr/learn/courses/30/lessons/12905
// dp 사용하여 시간 복잡도 줄임

const solution = (board) => {
  let maxSide = 0; // 최대 변 길이
  const row = board.length;
  const col = board[0].length;
  const dp = Array.from({ length: row }, () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // board의 (i, j) 위치가 1인 경우
      if (board[i][j] === 1) {
        // 첫 번째 행 또는 첫 번째 열인 경우
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          // 현재 위치의 왼쪽, 위쪽, 왼쪽 위 대각선의 최소값에 1을 더하여 dp에 저장
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide; // 최대 넓이를 반환
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));
// 완전 탐색 시간 초과.

const solution_fail = (board) => {
  let check_board = Array.from({length:board.length}, () => Array(board[0].length).fill(0)); // 정사각형의 변 길이를 저장하는 배열
  let answer = 0; // 최대 정사각형의 변 길이

  const check = (y, x, c) => {
      let count = c; // 현재 정사각형의 변 길이
      
      while(true){
          count += 1; // 변의 길이를 1 증가
          const crnt_x = x + count; // 현재 탐색하는 위치의 x 좌표
          const crnt_y = y + count; // 현재 탐색하는 위치의 y 좌표
          
          // 배열의 범위를 벗어난 경우 정사각형의 변 길이를 갱신하고 반복 종료
          if(crnt_x >= board[0].length || crnt_y >= board.length){
              check_board[y][x] = count;
              answer = Math.max(answer, count);
              return
          }
 
          // 만약 변의 요소가 1이 아닐 경우 정사각형의 변 길이를 갱신하고 반복 종료
          if(board[y][crnt_x] !== 1 || board[crnt_y][x] !== 1){
              check_board[y][x] = count;
              answer = Math.max(answer, count);
              return
          }

          // 대각선 방향의 요소가 1인지 확인
          for(let i=1; i<=count; i++){
              if(board[crnt_y][x+i] !== 1){
                  check_board[y][x] = count;
                  answer = Math.max(answer, count);
                  return
              }
          }

          // 다른 변의 요소가 1인지 확인
          for(let i=1; i<count; i++){
              if(board[y+i][crnt_x] !== 1){
                  check_board[y][x] = count;
                  answer = Math.max(answer, count);
                  return
              }
          }
      }
  }

  // 배열의 모든 요소를 순회하며, 요소가 1이면 check 함수를 호출
  for(let i=0; i<board.length; i++){
      for(let j=0; j<board[0].length; j++){
          if(board[i][j] === 1){
              check(i, j, check_board[i][j]);
          }
      }
  }

  // 최대 정사각형의 넓이를 반환
  return answer * answer;
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))
