// https://www.acmicpc.net/problem/3273

let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

const N = Number(input[count++]);
const arr = input[count++].split(' ').map(Number);
const X = Number(input[count++])
let answer = 0;
arr.sort((a, b) => a-b)

let left_poinetr = 0;
let right_pointer = arr.length-1;

while(left_poinetr < right_pointer){
  if(arr[left_poinetr] + arr[right_pointer] < X){
    left_poinetr += 1;
    continue
  }
  if(arr[left_poinetr] + arr[right_pointer] > X){
    right_pointer -= 1;
    continue
  }
  if(arr[left_poinetr] + arr[right_pointer] === X){
    answer += 1;
    right_pointer -= 1;
    continue   
  }
}

console.log(answer);