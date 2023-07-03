let input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
let count = 0;

const T = Number(input[count++])

const dy = [-1, 1,  0, 0];
const dx = [ 0, 0, -1, 1];


for(let i=0; i<T; i++){
  let answer = 0;
  const [M, N, K] = input[count++].split(' ').map(Number);
  const graph = Array.from({length:N}, () => Array(M).fill(0));
  
  const BFS = (y, x) => {
    const queue = [[y, x]];
    graph[y][x] = 0;
    while(queue.length > 0){
      const [ crnt_y, crnt_x ] = queue.shift();

      for(let i=0; i<4; i++){
        const next_y = crnt_y + dy[i];
        const next_x = crnt_x + dx[i];

        if(next_y >= 0 && next_y < N && next_x >= 0 && next_x < M){
          if(graph[next_y][next_x] === 1){
            graph[next_y][next_x] = 0;
            queue.push([next_y, next_x])
          }
        }
      }
    }
  }

  for(let j=0; j<K; j++){
    const [A, B] = input[count++].split(' ').map(Number);
    graph[B][A] = 1;
  }

  for(let k=0; k<N; k++){
    for(let m=0; m<M; m++){
      if(graph[k][m] === 1){
        BFS(k, m)
        answer += 1;
      }
    }
  }
  console.log(answer);
}