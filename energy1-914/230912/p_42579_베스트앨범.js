function solution(genres, plays) {
  // 장르별 토탈 재생 수를 객체로 저장 {장르: [누적합, ...개별 재생 수]}
  // 누적을 비교하여 장르의 순위 알아내기
  // 순위별 장르의 value값을 돌며 개별 재생수의 1위 2위 찾기
  // 해당 값의 인덱스를 plays에서 찾아내기

  let answer = [];
  let info = {};
  let len = genres.length;
  let sortGenres = [];
  for (let i = 0; i < len; i++) {
    if (info[genres[i]]) {
      info[genres[i]][0] += plays[i];
      info[genres[i]].push(plays[i]);
    } else {
      info[genres[i]] = [plays[i], plays[i]];
    }
  }
  // [장르, 누적합]을 새로운 배열에 저장하기
  for (let x in info) {
    sortGenres.push([x, info[x][0]]);
  }
  // 누적합 기준으로 정렬하기
  sortGenres.sort((a, b) => b[1] - a[1]);

  for (let x of sortGenres) {
    let targetGenres = x[0];
    let genresPlays = [...info[targetGenres]].sort((a, b) => b - a);
    genresPlays.shift();
    // 장르에 속한 곡이 하나일 경우
    if (genresPlays.length === 1) {
      answer.push(plays.indexOf(genresPlays[0]));
    }
    // 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
    else if (genresPlays[0] === genresPlays[1]) {
      let indexes = [];
      for (let i = 0; i < len; i++) {
        if (plays[i] === genresPlays[0]) {
          indexes.push(i);
        }
      }
      indexes.sort((a, b) => a - b);
      answer.push(...indexes);
    } else {
      let turn = 1;
      while (turn < 3) {
        answer.push(plays.indexOf(genresPlays.shift()));
        turn++;
      }
    }
  }
  return answer;
}
