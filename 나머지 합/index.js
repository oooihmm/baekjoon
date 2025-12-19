const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map((i) => Number(i));

const A = [0, ...input[1].split(' ').map((i) => Number(i))];

// 구간합을 나타내는 배열 D, D[i] = A[1] + ... + A[i]
let D = [A[0]]; // 첫 번째 값
for (let i = 1; i < n + 1; i++) {
  const sum = D[i - 1] + A[i];
  D.push(sum);
}

// (A + B) % C = ((A % C) + (B % C)) % C
// 문제에서 찾고자 하는 값은 (D[j] - D[i - 1]) % m === 0 인 값의 개수
// 이는 곧 ((D[j] % m) - (D[i - 1] % m)) % m === 0 인 값의 개수
// (D[j] % m) - (D[i - 1] % m)가 0이면 항상 조건을 만족한다.

let count = 0;
const R = D.map((i) => i % m);
const remainderCount = new Array(m).fill(0);

for (let i = 1; i < n + 1; i++) {
  const remainder = R[i];
  remainderCount[remainder] += 1;
}

// 1) D[j] === 0 => (A[1] + ... + A[i]) % m === 0 => 조건 만족

count += remainderCount[0];

// 2) D[j] % m === D[i - 1] % m => 조건 만족

for (let i = 0; i < m; i++) {
  const c = remainderCount[i];
  count += (c * (c - 1)) / 2; // 2개 조합 경우의 수
}

console.log(count);
