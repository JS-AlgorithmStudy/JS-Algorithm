const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

  const solution = (input) => {
    const [arrLength, arr, value] = input;
    // 수열의 배열로 만들고, 오른차순으로 정렬
    const sequence = arr.split(" ").sort((a,b) => a-b);
    // 투포인터 알고리즘을 사용하기 위해 시작인덱스와 끝인덱스를 설정
    let start = 0;
    let end = arrLength-1;
    let count = 0;
  
    while(start < end) {
      // value에서 시작값을 뺀 값을 찾기위해 변수선언
      const target = value - sequence[start];

      if(target < Number(sequence[end])) {
        end--;
      } else if(target === Number(sequence[end])) {
        count++;
        start++;
        end--;
      } else {
        start++;
      }
    }
  
    return count;
  };
  
  console.log(solution(input));