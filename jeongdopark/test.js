// https://school.programmers.co.kr/learn/courses/30/lessons/12905


const solution = (board) => {
  let check_board = Array.from({length:board.length}, () => Array(board[0].length).fill(0));
  let answer = 0;

  const check = (y, x, c) => {
      let count = c;
      
      while(true){
          count += 1; // 정사각현 변의 길이가 1씩 커진다.
          const crnt_x = x + count; // (y, crnt_x)
          const crnt_y = y + count; // (crnt_y, x)
          
          if(crnt_x >= board[0].length || crnt_y >= board.length){
              check_board[y][x] = count;
              answer = Math.max(answer, count);
              return
          }
 
          if(board[y][crnt_x] !== 1 || board[crnt_y][x] !== 1){   // 1이 아닐경우
              check_board[y][x] = count;
              answer = Math.max(answer, count);
              return
          }

          for(let i=1; i<=count; i++){
              if(board[crnt_y][x+i] !== 1){
                  check_board[y][x] = count;
                  answer = Math.max(answer, count);
                  return
              }
          }

          for(let i=1; i<count; i++){
              if(board[y+i][crnt_x] !== 1){
                  check_board[y][x] = count;
                  answer = Math.max(answer, count);
                  return
              }
          }
      }
  }

  for(let i=0; i<board.length; i++){
      for(let j=0; j<board[0].length; j++){
          if(board[i][j] === 1){
              check(i, j, check_board[i][j]);
              console.log(check_board);
          }
      }
  }


  return answer * answer;
}


console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))