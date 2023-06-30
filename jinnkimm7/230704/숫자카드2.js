const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/JS-Algorithm/jinnkimm7/230704/숫자카드2.txt').toString().split('\n');

const cards = input[1].split(' ').map(Number);
const map = new Map();
// Map을 이용해서 카드 갯수를 센다. (key: 카드 숫자, value: 갯수)
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  // 카드가 있으면 이전 value를 가져와서 1을 더해준다.
  if (map.has(card)) map.set(card, map.get(card) + 1);
  // 카드가 없으면 key와 value를 set해준다.
  else map.set(card, 1);
}

const arr = input[3].split(' ').map(Number);
let answer = '';
for (let i = 0; i < arr.length; i++) {
  const el = arr[i];
  if (map.has(el)) answer += `${map.get(el)} `;
  else answer += '0 ';
}

console.log(answer);