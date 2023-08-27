// https://school.programmers.co.kr/learn/courses/30/lessons/49189

// 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지 구하는 문제.
// 1번를 출발 노드로 BFS를 돌린다.
// 1번 노드로부터 거리를 기록. 

function solution(n, edge) {
  let obj = {};
  const graph = Array.from({length: n+1}, () => []);
  for(let i=0; i<edge.length; i++){
    const [a, b] = edge[i];
    graph[a].push(b);
    graph[b].push(a);
  }
  const visit = Array.from({length: n+1}, () => false);
  
  // 최단거리 bfs
  const bfs = (start, depth) => {
    const queue = [[start, depth]];
    visit[start] = true

    while(queue.length > 0){
      const [node, dep] = queue.shift();
      if(obj[dep]){
        obj[dep] += 1;
      }else{
        obj[dep] = 1;
      }


      for(let i=0; i<graph[node].length; i++){
        if(!visit[graph[node][i]]){
          visit[graph[node][i]] = true
          queue.push([graph[node][i], dep+1])
        }
      }
    }
  }
  bfs(1, 0)
  console.log(obj);
  // 키 : 1로부터 떨어진 거리 , 값 : 노드 개수
  // { '0': 1, '1': 2, '2': 3 }
  // maxKey를 찾는다. 
  let maxKey = Object.keys(obj).reduce((a, b) => Math.max(Number(a), Number(b)));
  return obj[maxKey];
}

console.log(solution(n=6, edge=[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));