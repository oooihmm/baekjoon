const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map((i) => Number(i));

const A = [0, ...input[1].split(' ').map((i) => Number(i))];

// 구간합을 나타내는 배열 D, D[i] = A[0] + A[1] + ... + A[i]
let D = [A[0]]; // 첫 번째 값
for (let i = 1; i < n + 1; i++) {
  const sum = D[i - 1] + A[i];
  D.push(sum);
}

let count = 0;
for (let i = 1; i < n + 1; i++) {
  for (let j = i; j < n + 1; j++) {
    const rangeSum = D[j] - D[i - 1];
    if (rangeSum % m === 0) count += 1;
  }
}

console.log(count);
