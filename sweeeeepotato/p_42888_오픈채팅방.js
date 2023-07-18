function solution(record) {
  const action = [];
  const id = [];
  const obj = {};
  const result = [];

  // action에는 들어왔는지, 나갔는지, 닉네임을 변경했는지에 대한 행동을 저장
  // id는 action의 인덱스에 해당하는 아이디를 저장
  // obj은 각 아이디에 해당하는 닉네임을 저장
  for (let i = 0; i < record.length; i++) {
    const arr = record[i].split(" ");
    if (arr[2] !== undefined) {
      obj[arr[1]] = arr[2];
    }
    action.push(arr[0]);
    id.push(arr[1]);
  }

  // 행동을 한 id를 추적하여 id에 해당하는 닉네임을 표시하여 문구를 나타냄
  for (let i = 0; i < record.length; i++) {
    if (action[i] === "Enter") {
      result.push(obj[id[i]] + "님이 들어왔습니다.");
    } else if (action[i] === "Leave") {
      result.push(obj[id[i]] + "님이 나갔습니다.");
    }
  }

  return result;
}
