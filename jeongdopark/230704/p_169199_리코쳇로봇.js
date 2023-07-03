
// 풀이 흐름
// 출발지 G, 목적지 R
// G 주변에 장애물이나 끝 지점이 아닐 경우 도달 할 수 없음
// 방향과 count 넣어준다. 

// G를 한칸 이동할 때마다 4방향을 살핀다.
// 4방향에 벽 or D가 있을 경우 queue에 넣는다.
// 방금 방향과 같을 경우 무시 

const solution = (board) => {
  const [N, M] = [board.length, board[0].length]
  const dx = [-1 ,1,  0, 0];
  const dy = [ 0, 0, -1, 1];
  const direct = [1, 0, 3, 2];
  let first_check = false;
  let G = [];
  let R = [];
  // 방문 여부 배열
  const visited = Array.from({length: N}, () => Array(M).fill(false))
  // BFS queue
  let queue = [];
  // 이동 count
  let answer = 0;
  // 목표 위치에 도달했는지 체크하는 boolean값
  let isPos = false;

  const BFS = () => {
    while(queue.length > 0){
      let check_visit = false;
      let [crnt_y, crnt_x, crnt_direct, count] = queue.shift()

      // 미끄러져, 벽이나 D에 도달할 때까지 이동
      while(true){
        let next_y = crnt_y + dy[crnt_direct]
        let next_x = crnt_x + dx[crnt_direct]
        if(next_y < 0 || next_y >= N || next_x < 0 || next_x >= M) break
        if(board[next_y][next_x] === "D") break
        if(board[next_y][next_x] === "R"){
          answer = count + 1
          isPos = true;
          return 
        }
        
        // 4방향 탐색
        for(let i=0; i<4; i++){
          let move_y = next_y + dy[i]
          let move_x = next_x + dx[i]

          // 벽일 경우
          if(move_y < 0 || move_y >= N || move_x < 0 || move_x >= M){
            if(!visited[next_y][next_x] && direct[direct[i]] !== crnt_direct){
              check_visit = true;
              queue.push([next_y, next_x, direct[i], count+1])
            }
          }else{
            // D일 경우
            if(board[move_y][move_x] === "D" ){
              if(!visited[next_y][next_x] && direct[direct[i]] !== crnt_direct){
                check_visit = true;
                queue.push([next_y, next_x, direct[i], count+1])
              }
            }
         
          }
        }
        
        if(check_visit){
          visited[next_y][next_x] = true
        }
        crnt_y = next_y
        crnt_x = next_x

      }
    }
  }

  // 보드 게임판 순회하며 G와 R 좌표 탐색

  for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
      if(board[i][j] === 'G'){
        G.push([i, j])
      }
      if(board[i][j] === 'R'){
        R.push([i, j])
      }
    }
  }

  // 처음 G위치 4방향 탐색한다.
  // G 주변 4방향에 벽이나 D가 없으면 -1 return
  for(let i=0; i<4; i++){
    const next_y = G[0][0] + dy[i]
    const next_x = G[0][1] + dx[i]

    if(next_y < 0 || next_y >= N || next_x < 0 || next_x >= M){
      first_check = true;
      queue.push([G[0][0], G[0][1], direct[i], 0])
    }else{
      if(board[next_y][next_x] === "D"){
        first_check = true;
        queue.push([G[0][0], G[0][1], direct[i], 0])
      }
      visited[G[0][0]][G[0][1]] = true
      if(board[next_y][next_x] === "R"){
        return 1
      }
    }
  }

  if(!first_check){
    return -1
  }

  BFS(G[0][0], G[0][1])
  if(!isPos){
    return -1
  }
  return answer;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));