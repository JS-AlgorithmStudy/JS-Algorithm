// start포인트에서 너비우선 탐색을 실행한다
// 한 턴에 큐에 start-1 / start+1 / start*2 를 넣는다
// 만약 세 케이스의 값이 이전에 탐색했던 값이면 넣지 않는다
// 객체에 포인트 : 레벨 값을 저장한다.
// 동일 턴에 직전 타겟 L +1 을 해준다
// end 포인트가 나오면 levels[target]을 리턴
let [start, end] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(x => +x);
let levels = {};
let queue = [start];
levels[start] = 0;
while (queue.length) {
  let target = queue.shift();
  if (target === end) {
    console.log(levels[target]);
    return;
  }
  for (let next of [target - 1, target + 1, target * 2]) {
    if (!levels[next] && next >= 0 && next <= 100000) {
      levels[next] = levels[target] + 1;
      queue.push(next);
    }
  }
}
