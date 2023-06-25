function solution(array, target) {
  let answer = 0;
  DFS(0, 0);

  //깊이 우선 탐색
  function DFS(i, sum) {
    //array의 모든 원소를 탐색한 경우
    if (i === array.length) {
      console.log(array);
      //sum이 target과 같은 경우 답+1
      if (sum === target) answer++;
    } else {
      //원소를 더한 경우
      DFS(i + 1, sum + array[i]);

      //원소를 뺀 경우
      DFS(i + 1, sum - array[i]);
    }
  }
  return answer;
}

// console.log(solution([1, 1, 1, 1, 1], 3));
// console.log(solution([4, 1, 2, 1], 4));
