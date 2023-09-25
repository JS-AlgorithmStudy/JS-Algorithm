class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(start, end) {
    let node = new Node(start, end);
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
}

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

// 현재 파이프의 놓인 방향을 파악
// 가로, 세로, 대각선
// 각 놓인 상태에 따라서 다음으로 진행할 수 있는 상태가 제한된다.

// 가장 처음 파이프의 위치는 (0,0), (0,1)
let answer = 0;
const N = Number(input[count++]);
const graph = [];

for (let i = 0; i < N; i++) {
  graph.push(input[count++].split(" ").map(Number));
}

const direction = [
  // 가로
  [
    [0, 1],
    [1, 1],
  ],
  //세로
  [
    [1, 0],
    [1, 1],
  ],
  // 대각선
  [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
];

// 현재 파이프의 방향을 반환하는 함수
const pipe_status = (start, end) => {
  const [start_y, start_x] = start;
  const [end_y, end_x] = end;
  // 가로일 경우
  if (start_y === end_y && start_x === end_x - 1) {
    return 0;
  }
  // 세로일 경우
  if (start_y === end_y - 1 && start_x === end_x) {
    return 1;
  }
  // 대각선일 경우
  if (start_y === end_y - 1 && start_x === end_x - 1) {
    return 2;
  }
};
if (graph[N - 1][N - 1] === 1) {
  answer = 0;
} else {
  const BFS = () => {
    const start = [0, 0]; // 파이프의 시작 지점
    const end = [0, 1]; // 파이프의 끝 지점
    const queue = new Queue();
    // const queue = [[start, end]];
    queue.push(start, end);
    // console.log(queue);
    while (queue.size > 0) {
      const crnt = queue.shift();
      const crnt_start = crnt.start;
      const crnt_end = crnt.end;

      const crnt_direction = pipe_status(crnt_start, crnt_end);
      for (let i = 0; i < direction[crnt_direction].length; i++) {
        const dy = direction[crnt_direction][i][0];
        const dx = direction[crnt_direction][i][1];
        const next_y = crnt_end[0] + dy;
        const next_x = crnt_end[1] + dx;

        // 격자판 내부인지 확인
        if (next_y >= 0 && next_y < N && next_x >= 0 && next_x < N) {
          // 대각선 이동일 경우, 3칸을 확인해야한다. 3칸이 빈칸이어야함.
          if (dy === 1 && dx === 1) {
            if (
              graph[crnt_end[0] + 1][crnt_end[1]] === 0 &&
              graph[crnt_end[0]][crnt_end[1] + 1] === 0 &&
              graph[crnt_end[0] + 1][crnt_end[1] + 1] === 0
            ) {
              if (next_y === N - 1 && next_x === N - 1) {
                answer += 1;
              }
              queue.push(crnt_end, [next_y, next_x]);
            }
            // 대각선 이동이 아닐 경우
          } else {
            if (graph[next_y][next_x] === 0) {
              if (next_y === N - 1 && next_x === N - 1) {
                answer += 1;
              }
              queue.push(crnt_end, [next_y, next_x]);
            }
          }
        }
      }
    }
  };
  BFS();
}

console.log(answer);
