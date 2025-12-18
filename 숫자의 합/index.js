const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = [...input[1]];

const sum = numbers.reduce((a, b) => Number(a) + Number(b), 0); // O(N)
console.log(sum);
