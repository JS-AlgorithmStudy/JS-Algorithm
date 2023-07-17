// https://www.acmicpc.net/problem/2644
// 부모 자식 1촌

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

// 전체 사람 수
const N = Number(input[count++]);
const graph = Array.from({length:N+1}, (_, i) => []);
// 촌수 계산해야하는 서로 다른 두 사람의 번호
const [A, B] = input[count++].split(' ').map(Number);

// 관계의 개수
const M = Number(input[count++]);

for(let i=0; i<M; i++){
  // 부모 자식관계는 양방향 그래프에서 서로 이어져있는 노드 관계
  const [X, Y] = input[count++].split(' ').map(Number);
  graph[X].push(Y)
  graph[Y].push(X)
}

// 촌수 계산해야하는 서로 다른 두 사람의 번호를 탐색하려면 
// A에서 B로 이어져있는지 확인해야함, DFS or BFS 사용

const visited = Array(N+1).fill(false);

const BFS = (start) => {
  // 시작 노드와, 촌수를 queue에 담아준다.
  const queue = [[start, 0]]
  visited[start] = true;

  while(queue.length > 0){
    const [crnt_node, count] = queue.shift()

    for(let i=0; i<graph[crnt_node].length; i++){

      if(!visited[graph[crnt_node][i]]){
        visited[graph[crnt_node][i]] = true
        // B에 도달했을 경우 return 현재촌수 +1
        if(graph[crnt_node][i] === B) return count+1
        queue.push([graph[crnt_node][i], count+1])
      }
    }
  }
  return -1
}

console.log(BFS(A));