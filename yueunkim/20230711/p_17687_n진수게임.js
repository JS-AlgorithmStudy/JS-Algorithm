function solution(n, t, m, p) {
  //numbers = n진법으로 바꾼 수
  let numbers = "";
  let i = 0;
  while (numbers.length < t * m) {
    let num = i.toString(n).toUpperCase();
    numbers += num; //numbers = "011011100"
    i++;
  }
  //numbers의 길이가 t*m 되도록 자름
  numbers = numbers.slice(0, t * m); //numbers = "01101110"

  //numbers를 m개씩 쪼개서 numbersSlice에 넣기
  let numbersSlice = [];
  for (let i = 0; i < numbers.length; i += m) {
    numbersSlice.push(numbers.slice(i, i + m)); //numbersSlice = ["01","10","11","10"]
  }

  //p번째것만 모아서 출력
  let tubeSay = "";
  for (let j = 0; j < numbersSlice.length; j++) {
    tubeSay += numbersSlice[j][p - 1]; //tubeSay = "0111"
  }

  return tubeSay;
}
