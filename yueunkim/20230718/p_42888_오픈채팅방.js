function solution(record) {
  let answer = [];
  let records = record.map((e) => e.split(" ")); // records = [["Enter","uid1234","Muzi"],...]
  const map = new Map(); //키 : 아이디, 값 : 해당 아이디의 가장 마지막 닉네임

  //아이디별로 가장 마지막 Enter 또는 Change를 찾아서 아이디와 닉네임을 map에 저장
  for (let i = records.length - 1; i >= 0; i--) {
    const [action, uid, nickname] = records[i];

    if (!map.has(uid) && (action === "Enter" || action === "Change")) {
      map.set(uid, nickname); // uid1234 : "Prodo", uid4567 : "Ryan"
    }
  }

  //records의 닉네임들을 가장 마지막 닉네임으로 변경
  records = records.map(([action, uid, nickname]) => {
    return [action, uid, map.get(uid)]; // records = [["Enter","uid1234","Prodo"],...]
  });

  //출력
  let message = "";
  for (let i = 0; i < records.length; i++) {
    if (records[i][0] === "Enter") {
      message = `${records[i][2]}님이 들어왔습니다.`;
      answer.push(message);
    } else if (records[i][0] === "Leave") {
      message = `${records[i][2]}님이 나갔습니다.`;
      answer.push(message);
    }
  }
  return answer;
}
