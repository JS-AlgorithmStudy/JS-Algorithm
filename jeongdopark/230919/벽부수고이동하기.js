let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

class Node {
  constructor(y, x, cnt, isBreak) {
    this.x = x;
    this.y = y;
    this.isBreak = isBreak;
    this.cnt = cnt;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(y, x, cnt, isBreak) {
    let node = new Node(y, x, cnt, isBreak);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  get length() {
    return this.size;
  }
}

const [N, M] = input[count++].split(" ").map(Number);
let graph = [];
let answer = 0;
for (let i = 0; i < N; i++) {
  graph.push(input[count++].split(""));
}

let visit = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [0, 0])
);

const BFS = (y, x) => {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  let queue = new Queue();
  // ( y, x, 이동 카운트, 벽 부술 기회 )
  queue.push(0, 0, 1, 1);
  visit[0][0][0] = 1;
  visit[0][0][1] = 1;
  while (queue.length > 0) {
    console.log(visit);
    let q = queue.shift();
    const [crnt_y, crnt_x, move_count, break_count] = [
      q.y,
      q.x,
      q.cnt,
      q.isBreak,
    ];
    if (crnt_y === N - 1 && crnt_x === M - 1) {
      answer = move_count;
      return;
    }
    for (let i = 0; i < 4; i++) {
      const next_y = crnt_y + dy[i];
      const next_x = crnt_x + dx[i];

      if (next_y >= 0 && next_y < N && next_x >= 0 && next_x < M) {
        if (graph[next_y][next_x] === "0") {
          // 다음 칸이 1이 아니고 방문한적 없는 칸일경우
          if (next_y === N - 1 && next_x === M - 1) {
            // 다음 칸이 목적지일 경우
            answer = move_count + 1;
            return;
          }
          // 부술 기회가 있는 상태일 경우
          if (break_count === 1 && visit[next_y][next_x][0] === 0) {
            queue.push(next_y, next_x, move_count + 1, break_count);
            visit[next_y][next_x][0] = move_count + 1;

            // 부술 기회가 없는 상태일 경우
          } else if (break_count === 0 && visit[next_y][next_x][1] === 0) {
            queue.push(next_y, next_x, move_count + 1, break_count);
            visit[next_y][next_x][1] = move_count + 1;
          }
          // 벽이면서 부술 기회가 있는 경우
        } else if (graph[next_y][next_x] === "1" && break_count === 1) {
          queue.push(next_y, next_x, move_count + 1, break_count - 1);
          visit[next_y][next_x][0] = move_count + 1;
        }
      }
    }
  }
};

BFS(0, 0);
if (answer === 0) {
  console.log(-1);
} else {
  console.log(answer);
}
