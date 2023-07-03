function solution(elements) {
  // 연속 수열을 만들기 위해서 수열 두개를 이어붙인다.
  const arr = [...elements, ...elements];
  // 중복 된 값을 제거 해주기 위해 set 자료구조를 만든다.
  const set = new Set();
  for (let i = 1; i <= elements.length; i++) {
    const len = i;
    for (let j = 0; j + len <= arr.length; j++) {
      set.add(arr.slice(j, j + len).reduce((a, c) => a + c, 0))
    }
  }
  return set.size;
}