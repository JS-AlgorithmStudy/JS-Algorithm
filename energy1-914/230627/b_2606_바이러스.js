const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(input);

  let n = parseInt(input[0]);
  input.splice(0, 2);
  input = input.map(x => x.split(" ")).map(x => x.map(v => parseInt(v)));

  let graph = Array.from(Array(n + 1), () => Array()); // 컴퓨터 연결 관계 그래프
  let check = [1]; // 경유한 컴퓨터 번호 리스트
  let answer = 0;

  for (let x of input) {
    graph[x[0]].push(x[1]);
    graph[x[1]].push(x[0]);
  }

  function DFS(x) {
    for (let i = 0; i < graph[x].length; i++) {
      if (!check.includes(graph[x][i])) {
        check.push(graph[x][i]);
        answer++;
        DFS(graph[x][i]);
      }
    }
  }
  // check 배열에 해당 컴퓨터가 들어있지 않을 경우에 if 문 안을 실행한다.
  // check 배열에 해당 컴퓨터를 들렸다고 표시
  // > 바이러스에 감염된 컴퓨터 숫자 + 1
  // 감염된 컴퓨터를 기준으로 다시 출발시킨다.

  DFS(1);
  console.log('answer' ,answer);
  console.log('check', check);
  process.exit();
});
