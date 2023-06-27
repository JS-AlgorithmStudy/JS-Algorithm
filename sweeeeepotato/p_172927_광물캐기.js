function solution(picks, minerals) {
  let result = 0;
  const total_picks = picks.reduce((acc, cur) => acc + cur);
  const slice_minerals = minerals.slice(0, total_picks * 5);
  const count_minerals = [];
  let count_arr = [0, 0, 0];

  slice_minerals.forEach((val, idx) => {
    if (val === "diamond") count_arr[0]++;
    else if (val === "iron") count_arr[1]++;
    else count_arr[2]++;

    if ((idx + 1) % 5 === 0 || idx === slice_minerals.length - 1) {
      count_minerals.push(count_arr);
      count_arr = [0, 0, 0];
    }
  });

  count_minerals.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

  for (const [dia, iron, stone] of count_minerals) {
    if (picks[0]) {
      result += dia + iron + stone;
      picks[0]--;
    } else if (picks[1]) {
      result += dia * 5 + iron + stone;
      picks[1]--;
    } else if (picks[2]) {
      result += dia * 25 + iron * 5 + stone;
      picks[2]--;
    }
  }

  return result;
}
