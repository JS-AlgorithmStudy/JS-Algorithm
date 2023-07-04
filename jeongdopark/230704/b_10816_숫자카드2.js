let input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");
let count = 0;

const N = Number(input[count++])
const num_arr = input[count++].split(' ').map(Number)
const M = Number(input[count++])
const find_arr = input[count++].split(' ').map(Number);
let obj1 = {}
let answer = [];

// 숫자카드 객체에 저장
// { '2': 1, '3': 2, '6': 1, '7': 1, '10': 3, '-10': 2 }
for(let i=0; i<num_arr.length; i++){
  if(!obj1[num_arr[fi]]){
    obj1[num_arr[i]] = 1
  }else{
    obj1[num_arr[i]] += 1;
  }
}

// 몇 개 가지고 있는 숫자 카드인지 구하는 로직
for(let i=0; i<find_arr.length; i++){
 if(obj1[find_arr[i]]){
  answer.push(obj1[find_arr[i]])
 } else{
  answer.push(0)
 }
}

console.log(answer.join(' '));