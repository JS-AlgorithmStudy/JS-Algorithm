let [n, target, m, ...graph] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
n = +n;
target = target.split(" ").map(x => +x).sort();
graph = graph.map(x => x.split(" ").map(x => +x));
let answer = -1;
let board = Array.from(Array(n + 1), () => Array());
let check = Array(n + 1).fill(0);

for (let [a, b] of graph) {
  board[a].push(b);
  board[b].push(a);
}

function DFS(L, start) {
  if (start === target[1]) {
    answer = L;
    return;
  }
  else {
    check[start] = 1;
    for (let i = 0; i < board[start].length; i++) {
      if (check[board[start][i]] === 0) {
        check[board[start][i]] = 1;
        DFS(L + 1, board[start][i]);
      }
    }
  }
}
DFS(0, target[0])
console.log(answer);