const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map((i) => Number(i));

const NGE = [];

for (let i = 0; i < n; i++) {
  // FIFO (QUEUE)
  const front = A[i];
  const rest = A.slice(i);

  let nge = -1;
  for (let j of rest) {
    if (j <= front) continue;

    nge = j;
    break;
  }

  NGE.push(nge);
}

console.log(NGE.join(' '));
