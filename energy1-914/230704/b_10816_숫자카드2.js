//solution 1.

let [n, myCards, m, checkCards] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
myCards = myCards
  .split(" ")
  .map(x => parseInt(x))
  .sort((a, b) => a - b);
checkCards = checkCards.split(" ").map(x => parseInt(x));
n = parseInt(n);
m = parseInt(m);
let answer = Array(m).fill(0);
let countCard = {};

//countCard 객체에 각 카드가 몇장씩 있는지 저장한다.
for (let x of myCards) {
  if (countCard[x]) {
    countCard[x]++;
  } else {
    countCard[x] = 1;
  }
}

// checkCards 배열을 돌며 타겟 카드가 countCard의 key에 존재한다면 true를 반환하므로 if문 실행
// answer배열의 i 번째 인덱스에 countCard의 해당 value 값을 넣어준다.
for (let i = 0; i < m; i++) {
  if (countCard[checkCards[i]]) {
    answer[i] = countCard[checkCards[i]];
  }
}

console.log(answer.join(' '));


// solution 2 이분탐색 이용

let [n, myCards, m, checkCards] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
myCards = myCards
  .split(" ")
  .map(x => parseInt(x))
  .sort((a, b) => a - b);

checkCards = checkCards.split(" ").map(x => parseInt(x));
n = parseInt(n);
m = parseInt(m);
let answer = Array(m).fill(0);
let countCard = [[myCards[0], 1]]; // 각 카드가 몇개 들어있는지 담는 배열

//아래 코드를 실행한 결과 countCard = [ [ -10, 2 ], [ 2, 1 ], [ 3, 2 ], [ 6, 1 ], [ 7, 1 ], [ 10, 3 ] ];
for (let i = 1; i < n; i++) {
  if (myCards[i - 1] === myCards[i]) {
    countCard[countCard.length - 1][1]++;
  } else {
    countCard.push([myCards[i], 1]);
  }
}

// 주석 코드로 실행하면 시간초과가 난다.

// for (let i = 0; i < m; i++) {
//   let [lt, rt] = [0, n - 1];

//   while (lt <= rt && lt >= 0 && rt < n) {
//     let midNum = Math.floor((lt + rt) / 2);
//     if (myCards[midNum] < checkCards[i]) {
//       lt = midNum + 1;
//     } else if (myCards[midNum] > checkCards[i]) {
//       rt = midNum - 1;
//     } else {
//       let targetIndex = countCard.findIndex(
//         element => element[0] === checkCards[i]
//       );
//       answer[i] = countCard[targetIndex][1];
//       break;
//     }
//   }
// }

//위 주석 방식과 아래 map 방식의 가장 큰 차이점은
// 위는 lt rt의 범위가 0부터 n-1 이라는 것
// 아래는 lt rt의 범위가 0부터 countCard.length - 1이라는 것이다.
// 각 카드가 몇장씩 있는지 확인하는 countCard의 길이가 myCard의 길이보다 훨씬 짧아서 
// 아래 코드는 시간초과가 안나는 것 같다...!🥲

checkCards.map((number,index)=> { 
    let lt = 0; 
    let rt = countCard.length - 1; 

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2); 

        if (number < countCard[mid][0]) { 
            rt = mid - 1; 
        } else if (number > countCard[mid][0]) { 
            lt = mid + 1; 
        } else { 
            answer[index] = countCard[mid][1]; 
            break;
        }
    }
    
})
console.log(countCard);
console.log(answer.join(' '));