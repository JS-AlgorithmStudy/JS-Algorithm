let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

// 검은 바둑알 1
// 흰 바둑알 2
// 빈칸 0
// 빈칸이 아닐 경우 8개의 방향을 탐색한다.

const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const visited = Array.from({ length: 19 }, () =>
  Array(19).fill(Array(8).fill(false))
);

const graph = [];

for (let i = 0; i < 19; i++) {
  graph.push(input[count++].split(" ").map(Number));
}

// 탐색 함수 인자로 (현재 위치, 탐색 방향, 바둑돌 색상)
const search = (y, x, dir, target) => {
  console.log(y, x, dir, target);
  visited[y][x][dir] = true;
  let count = 1;
  let crnt_y = y;
  let crnt_x = x;
  const arr = [[y, x]];
  while (true) {
    const next_y = crnt_y + dy[dir];
    const next_x = crnt_x + dx[dir];
    console.log(y, x, next_y, next_x);
    // 구간 유효성 검사
    if (next_y >= 0 && next_y < 19 && next_x >= 0 && next_x < 19) {
      // 연속적으로 같은 색의 바둑돌인지 검사
      if (graph[next_y][next_x] === target) {
        console.log(y, x, next_y, next_x);
        console.log(visited[next_y][next_x][dir]);
        if (visited[next_y][next_x][dir] === false) {
          console.log(y, x, next_y, next_x);
          visited[next_y][next_x][dir] = true;
          arr.push([next_y, next_x]);
          count += 1;
          // 5목을 넘어갈 경우
          if (count >= 6) return [false];
          crnt_y = next_y;
          crnt_x = next_x;
          // 다음 칸이 같은 색의 바둑돌이 아닐 경우
        } else {
          break;
        }
      } else {
        break;
      }
    } else {
      break;
    }
  }
  // 오목일 경우
  console.log(count);
  if (count === 5) return [true, arr];
  else return [false];
};

let answer = [];
// 오목판 순회
const solution = () => {
  for (let i = 0; i < 19; i++) {
    for (let k = 0; k < 19; k++) {
      if (graph[i][k] !== 0) {
        for (let j = 0; j < 8; j++) {
          if (visited[i][k][j] === false) {
            const result = search(i, k, j, graph[i][k]);

            if (result[0]) {
              const temp_arr = result[1];
              temp_arr.sort((a, b) => {
                // 두번째 요소 비교
                if (a[1] < b[1]) {
                  return -1;
                } else if (a[1] > b[1]) {
                  return 1;
                } else {
                  // 두번째 요소가 같을 경우 첫번째 요소로 비교
                  return a[0] - b[0];
                }
              });
              answer.push(graph[i][k], [
                temp_arr[0][0] + 1,
                temp_arr[0][1] + 1,
              ]);
              return;
            }
          }
        }
      }
    }
  }
};

solution();

if (answer.length > 0) {
  console.log(answer[0]);
  console.log(answer[1].join(" "));
} else {
  console.log(0);
}
