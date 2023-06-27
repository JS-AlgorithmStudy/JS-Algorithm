// https://school.programmers.co.kr/learn/courses/30/lessons/172927

// 문제 이해 )
// 각 곡괭이는 광물 5개를 캔 후에는 더 이상 사용 X
// 최소한의 피로도로 광물을 캐라
// 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용해야한다.
// 광물은 주어진 순서대로만 캘 수 있다.
// 모든 광물을 캐거나, 곡괭이가 없으면 종료

// ----------------------------------------

// 문제 풀이 )
// 5개의 광물 하나의 묶음으로 생각
// 각 묶음의 비용을 계산한다. 비용 : diamond +100, iron +25, ston +1
// 묶음 비용 단위로 내림차순 정렬한다.
// 가장 첫 번째 묶음부터 다이아몬드, 철, 돌 순서대로 소진.

// 첫 번째 시도 풀이에서 8번 케이스만 실패.
// 이유 : '광물은 주어진 순서대로만 캘 수 있습니다' 조건 간과

// ----------------------------------------

// 후기 )
// 5개의 묶음 단위로 풀이할 생각을 했지만
// 묶음 단위의 비용 비교를 어떻게 해야할지 명확하게 떠오르지 않았던 문제이다.
// 객체를 사용하여 풀이하였던게 재밌었다.

const solution = (picks, minerals) => {
  var answer = 0;
  let total = 0;
  let count = 0;
  let 광물묶음 = [];

  // 총 곡괭이 개수
  let 총곡괭이개수 = 0;

  // 총 곡괭이 개수
  for (let i = 0; i < 3; i++) {
    총곡괭이개수 += picks[i];
  }

  // 5개의 광물 하나의 묶음으로 생각
  // 각 묶음의 비용을 계산한다. 비용 : diamond +100, iron +25, ston +1
  for (let i = 0; i < minerals.length; i++) {
    count += 1;
    if (minerals[i] === "diamond") {
      total += 100;
    }
    if (minerals[i] === "iron") {
      total += 25;
    }
    if (minerals[i] === "stone") {
      total += 1;
    }
    if (count === 5) {
      광물묶음.push({
        start: i - 4,
        end: i,
        total,
      });
      total = 0;
      count = 0;
    }

    if (i === minerals.length - 1 && count !== 0) {
      광물묶음.push({
        start: i - (i % 5),
        end: i,
        total,
      });
    }
  }

  // 1차 풀이 이후 추가한 코드
  //
  const 광물묶음내림차순 = 광물묶음.slice(0, 총곡괭이개수).sort((a, b) => {
    return b.total - a.total;
  });

  // 세 번 등장하는 while문에서는 diamond, iron, stone 곡공이 소진시키는 로직이다.
  // diamond 곡괭이로 광물캐기
  while (picks[0] !== 0 && 광물묶음내림차순.length !== 0) {
    picks[0] -= 1;
    const { start, end } = 광물묶음내림차순.shift();
    for (let i = start; i <= end; i++) {
      answer += 1;
    }
  }

  // iron 곡괭이로 광물캐기
  while (picks[1] !== 0 && 광물묶음내림차순.length !== 0) {
    picks[1] -= 1;
    const { start, end } = 광물묶음내림차순.shift();
    for (let i = start; i <= end; i++) {
      if (minerals[i] === "diamond") {
        answer += 5;
      } else {
        answer += 1;
      }
    }
  }

  // stone 곡괭이로 광물캐기
  while (picks[2] !== 0 && 광물묶음내림차순.length !== 0) {
    picks[2] -= 1;
    const { start, end } = 광물묶음내림차순.shift();
    for (let i = start; i <= end; i++) {
      if (minerals[i] === "diamond") {
        answer += 25;
      }
      if (minerals[i] === "iron") {
        answer += 5;
      }
      if (minerals[i] === "stone") {
        answer += 1;
      }
    }
  }
  return answer;
};

// picks [dia, iron, stone]
solution(
  [0, 1, 1],
  ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]
);
