// https://www.acmicpc.net/problem/3273
// DFS, BFS 템플릿.

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;


const [N, M, V] = input[count++].split(' ').map(Number);

// [ [], [], [], [], [] ]
const graph = Array.from({length:N+1}, (_, i) => [])
let DFS_ANS = [];
let BFS_ANS = [];
for(let i=0; i<M; i++){
  const [A, B] = input[count++].split(' ').map(Number);
  // 양방향 그래프
  graph[A].push(B)
  graph[B].push(A)
}

// 정렬을 해줘야 되더라고요 .. ! 
for(let i=1; i<graph.length; i++){
  graph[i].sort((a, b) => a-b);
}

// 방문 체크 
const visited = Array(N+1).fill(false);
  // [false, false, false, false, false]

// board [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ]
// V부터 방문된 점



const DFS = (4) => {
  if(visited[node]) return  // 탈출조건
  visited[node] = true
  
  DFS_ANS.push(node)

  for(let i=0; i<graph[node].length; i++){
    DFS(graph[node][i])
  }

}

DFS(V)
console.log(DFS_ANS.join(' '));

const BFS = (node) => {
  let queue = [node];
  visited[node] = false
  BFS_ANS.push(node)

  while(queue.length > 0){
    const crnt_node = queue.shift()

    for(let i=0; i<graph[crnt_node].length; i++){
      if(visited[graph[crnt_node][i]]){
        visited[graph[crnt_node][i]] = false;
        queue.push(graph[crnt_node][i])
        BFS_ANS.push(graph[crnt_node][i])
      }
    }
  }
}

BFS(V)
console.log(BFS_ANS.join(' '));
