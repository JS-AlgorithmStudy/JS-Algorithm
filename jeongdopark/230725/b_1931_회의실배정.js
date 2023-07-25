let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
const N = Number(input[count++]);
let time = [];

for(let i=0; i<N; i++){
    time.push(input[count++].split(' ').map((e) => parseInt(e)));
}
time.sort((a, b) => a[0] - b[0]);
time.sort((a, b) => a[1] - b[1]);

let end_time = time[0][1];
let meeting = 1;

for(let i=1; i<time.length; i++){
    const start_time = time[i][0];
    if(end_time <= start_time){ 
        meeting += 1;
        end_time = time[i][1];
    }
}

console.log(meeting);