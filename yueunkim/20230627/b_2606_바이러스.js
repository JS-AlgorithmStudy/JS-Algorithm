const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");
const num = parseInt(input[0]);
const ssang = parseInt(input[1]);
const connectedCom = Array.from({ length: num + 1 }, () => []);
for (let i = 2; i < ssang + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  //connectedCom.push([a,b])가 아니고
  connectedCom[a].push(b);
  connectedCom[b].push(a);
}

function solution(connectedCom) {
  let infected = []; //감염

  //1과 연결된 컴퓨터 찾기
  for (let i = 0; i < connectedCom.length; i++) {
    //배열에 1이 들어있는 경우
    if (connectedCom[i].includes(1)) {
      for (let j = 0; j < connectedCom[i].length; j++) {
        //1이 아니면 감염
        if (connectedCom[i][j] !== 1) {
          infected.push(connectedCom[i][j]);
        }
      }
    }
  }

  //1과 연결된 컴퓨터와 연결된 컴퓨터 찾기
  let newInfected = [];
  infected.forEach((e) => {
    for (let i = 0; i < connectedCom.length; i++) {
      //배열에 그 컴퓨터가 들어있는 경우
      if (connectedCom[i].includes(e)) {
        for (let j = 0; j < connectedCom[i].length; j++) {
          //그 컴퓨터가 아니고 1도 아니면 감염
          if (connectedCom[i][j] !== e && connectedCom[i][j] !== 1) {
            newInfected.push(connectedCom[i][j]);
          }
        }
      }
    }
  });

  infected.push(...newInfected);
  infected = [...new Set(infected)];
  console.log(infected.length);
}

solution(connectedCom);

//백준 제출용
// let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString().split("\n");
// // let input = fs
// //   .readFileSync(__dirname + "/input.txt")
// //   .toString()
// //   .split("\n");

// const num = +input[0];
// const connectedComSize = +input[1];
// let connectedCom = Array.from({ length: num + 1 }, () => []);
// for (let i = 2; i < connectedComSize + 2; i++) {
//   const [a, b] = input[i].split(" ").map(Number);
//   connectedCom[a].push(b);
//   connectedCom[b].push(a);
// }

// function solution(connectedCom) {
//   let infected = new Set();
//   let queue = [1];

//   //queue에 남는 수가 없을 때까지
//   while (queue.length > 0) {
//     const current = queue.shift(); //가장 앞의 수를 삭제하고 current에 넣기
//     infected.add(current); //감염

//     for (let i = 0; i < connectedCom[current].length; i++) {
//       //감연된 current의 옆에 있는 컴퓨터들
//       const next = connectedCom[current][i];
//       if (!infected.has(next)) {
//         queue.push(next);
//       }
//     }
//   }

//   console.log(infected.size - 1); // 1번 컴퓨터 제외
// }

// solution(connectedCom);

// console.log(
//   solution(7, 6, [
//     [1, 2],
//     [2, 3],
//     [1, 5],
//     [5, 2],
//     [5, 6],
//     [4, 7],
//   ])
// );
