let input = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;

const n = Number(input[count++])

const stack = []
const stack_ans = []
let verify = true
let number = 0;

for(let i=0; i<n; i++){
  const target_num = Number(input[count++])
  
  while(number < target_num){
    number += 1;
    stack_ans.push("+")
    stack.push(number)
  }
  if(stack[stack.length-1] === target_num){
    stack.pop()
    stack_ans.push("-")
  }else{
    verify = false;
    break
  }
}

if(verify === false){
  console.log("NO");
}else{
  console.log(stack_ans.join('\n'));
}