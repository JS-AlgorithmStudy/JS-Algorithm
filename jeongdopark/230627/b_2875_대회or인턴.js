// https://www.acmicpc.net/problem/2875

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

let [N, M, K] = input[count++].split(" ").map(Number);
// N 여학생 수, M 남학생 수, K 인턴에 참여해야하는 인원

let team_count = 0;

// 먼저 현재 여학생 수와 남학생 수로 몇 개의 팀을 만들 수 있는지 구한다.
while (N > 0 && M > 0) {
  // 여학생 -2
  N -= 2;
  // 남학생 -1
  M -= 1;
  if (N >= 0 && M >= 0) {
    // 여2 남1 팀 하나 편성
    team_count += 1;
  } else {
    N += 2;
    M += 1;
    break;
  }
}

// 팀을 최대로 편성하고 남아있는 여학생을 인턴십 보낸다.
while (N > 0) {
  N -= 1;
  K -= 1;
}

// 팀을 최대로 편성하고 남아있는 남학생을 인턴십 보낸다.
while (M > 0) {
  M -= 1;
  K -= 1;
}

// 그럼에도 인턴십 보내야할 인원이 남아있다면
// 팀 편성된 인원에서 인턴십을 보낸다.
while (team_count > 0 && K > 0) {
  team_count -= 1;
  K -= 3;
}

console.log(team_count);
