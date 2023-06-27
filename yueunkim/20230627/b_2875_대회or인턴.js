function solution(n, m, k) {
  let team = 0;

  //여학생 수가 2명 미만 또는 남학생 수가 1명 미만인 경우
  if (n < 2 || m < 1) {
    return team;
  }

  //여학생 수가 2명 이상, 남학생 수가 1명 이상, 남녀 학생 수의 합-3이 인턴 수 이상인 경우
  while (n >= 2 && m >= 1 && n + m - 3 >= k) {
    n -= 2;
    m--;
    team++;
  }
  return team;
}

// //백즌 제출용
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   // .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split(" ");

// function solution(input) {
//   let [n, m, k] = input.map(Number);

//   let team = 0;
//   //여학생 수가 2명 이상, 남학생 수가 1명 이상 or 남녀 학생 수의 합-3이 인턴 수보다 많은 경우에만
//   while (n >= 2 && m >= 1 && n + m - 3 >= k) {
//     n -= 2;
//     m--;
//     team++;
//   }

//   console.log(team);
// }

// solution(input);

// //삽질
// function solution(n, m, k) {
//   let team = 0;
//   let q = 0;

//   if (n >= 2 && m >= 1) {
//     //남학생 수가 여학생 수 이상인 경우
//     if (m >= n) {
//       m -= k; // 남학생에서 인턴 수만큼 빼기
//       q = Math.floor(n / 2); // 여학생 수를 2로 나눈 몫
//       team = Math.min(q, m); // 몫과 남학생 수 중 작은 값 선택
//       //여학생이 남학생의 두배 이상인 경우
//     } else if (n >= m * 2) {
//       n -= k; // 여학생에서 인턴 수만큼 빼기
//       q = Math.floor(n / 2); // 여학생 수를 2로 나눈 몫
//       team = Math.min(q, m); // 몫과 남학생 수 중 작은 값 선택
//       //인턴의 수가 남학생 수의 절반보다 적은 경우
//     } else if (k < m / 2) {
//       m -= k;
//       q = Math.floor(n / 2); // 여학생 수를 2로 나눈 몫
//       team = Math.min(q, m); // 몫과 남학생 수 중 작은 값 선택
//       //인턴의 수가 남학생 수의 절반보다 큰 경우
//     } else {
//       //?????????????????????????????
//     }
//   }
//   return team;
// }
