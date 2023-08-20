function solution(n, edge) {
  let answer = 0;
  let depth = [0, 0];
  let graph = Array.from(Array(n + 1), () => Array(0));
  for (let x of edge) {
    graph[x[0]].push(x[1]);
    graph[x[1]].push(x[0]);
  }
  graph.map(array => array.sort((a, b) => a - b));

  function BFS() {
    let queue = [1];
    while (queue.length) {
      let target = queue.shift();
      for (let x of graph[target]) {
        if (!depth[x]) {
          depth[x] = depth[target] + 1;
          queue.push(x);
        }
      }
    }
  }
  BFS();

  depth.splice(0, 2);
  const max = Math.max(...depth);
  answer = depth.filter(num => num === max).length;
  return answer;
}
