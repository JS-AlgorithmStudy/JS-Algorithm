let [nums, ...graph] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let [n, m, v] = nums.split(" ").map(x => +x);
let answer = [];
graph = graph.map(x => x.split(" ").map(y => +y));
// console.log(graph);

//board : 연결관계를 입력한다
let board = Array.from(Array(n + 1), () => Array());
let set = new Set(); // 갯수 세기
for (let [a, b] of graph) {
  board[a].push(b);
  board[b].push(a);
  set.add(a).add(b);
}
board.map(x => x.sort((a, b) => a - b));
let temp = [];
let check = Array(n + 1).fill(0);

function DFS(L, start) {
  if (temp.length === set.size) {
    answer.push(temp.join(" "));
    temp = [];
  } else {
    if (check[start] === 0) {
      check[start] = 1; // start point 체크를 걸어준다
      temp.push(start); // temp 배열에 start point를 넣어준다
    }
    if (board[start].length === 0) { // 연결된 정점이 없으면 정점 자체를 반환한다.
      answer.push(temp.join(" "));
      temp = [];
      return;
    }
    for (let i = 0; i < board[start].length; i++) {
      if (check[board[start][i]] === 0) {
        check[board[start][i]] = 1;
        temp.push(board[start][i]);
        DFS(L + 1, board[start][i]);
      }
    }
  }
}

function BFS(start) {
  let queue = [];
  let tmp = [];
  let ch = Array(n + 1).fill(0);
  queue.push(start);
  ch[start] = 1;

  while (queue.length) {
    let target = queue.shift();
    tmp.push(target);
    for (let x of board[target]) {
      if (ch[x] === 0) {
        queue.push(x);
        ch[x] = 1;
      }
    }
  }
  answer.push(tmp.join(" "));
}

DFS(0, v);
BFS(v);
answer.map(x=> console.log(x))