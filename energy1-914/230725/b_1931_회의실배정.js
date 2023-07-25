let [n, ...array] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
n = +n;

array = array.map(x => x.split(" ").map(x => +x));
array.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}); //오름차순 정렬
// console.log(array);
let answer = 1;
let target = array[0][1];
for (let i = 1; i < n; i++) {
  if (target <= array[i][0]) {
    answer++;
    target = array[i][1];
  }
}
console.log(answer);
