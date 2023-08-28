let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0

const [N, M] = input[count++].split(' ').map(Number)
let things = []

for(let i=0; i<N; i++){
    const[W, V] = input[count++].split(' ').map(Number)
    things.push([W, V])
}

let dp_arr = Array.from({length: N}, () => Array(M+1).fill(0))

for(let i=0; i<N; i++){
    const [W, V] = things[i]
    for(let j=0; j<dp_arr[i].length; j++){
        if(i === 0){
            if(W <= j) dp_arr[i][j] = V 
        }else{
            if(W > j) dp_arr[i][j] = dp_arr[i-1][j]
            else dp_arr[i][j] = Math.max(dp_arr[i-1][j], dp_arr[i-1][j-W] + V)
        }
    }
}

console.log(dp_arr[N-1][M]);