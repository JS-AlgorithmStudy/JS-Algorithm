function solution(progresses, speeds) {
  let answer = [];
  const day_left = []; // 남은 일수

  for (let i = 0; i < progresses.length; i++) {
    day_left.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let stack = [];
  for (let i = 0; i < day_left.length; i++) {
    const head = stack[0];
    const newNode = day_left[i];

    // 스택이 비어 있으면 값을 넣는다.
    if (stack.length === 0) stack.push(newNode);

    // 앞 단계 기능 개발이 진행중이면, 뒷 기능 배포를 미룬다.
    if (head >= newNode) stack.push(newNode);
    else if (head < newNode) {
      /*
      1. 스택의 길이(= 배포할 기능의 수)를 answer에 넣어주고
      2. 스택을 비워준다. (= 기능을 배포한다.)
      3. 그리고 스택에 새로운 노드를 추가한다.
      */
      answer.push(stack.length);
      stack = [];
      stack.push(newNode);
    }
  }
  // 스택이 비어있다면(배포할 기능이 없다면) null을 반환하고, 배포할 기능이 있다면 배포한다.
  stack.legnth === 0 ? null : answer.push(stack.length);

  return answer;
}