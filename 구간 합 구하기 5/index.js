const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map((i) => Number(i));

// 주어진 숫자를 담은 nxn 배열 A
// A의 구간합을 저장하는 nxn 배열 D
// A와 D는 1번째 줄부터 n번쨰 줄까지 사용하므로 0행과 0열의 값은 0으로 고정
// A와 D는 n+1 x n+1 크기의 이차원 배열

let A = [];
A.push(new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  const row = input[i].split(' ').map((i) => Number(i));
  A.push([0].concat(...row));
}

const D = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= n; y++) {
    // D의 0행과 0열이 항상 0으로 고정되어 있으므로 구간합 공식을 바로 적용할 수 있다
    D[x][y] = D[x - 1][y] + D[x][y - 1] - D[x - 1][y - 1] + A[x][y];
  }
}

for (let i = n + 1; i <= n + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map((i) => Number(i));
  const result = D[x2][y2] - D[x1 - 1][y2] - D[x2][y1 - 1] + D[x1 - 1][y1 - 1];
  console.log(result);
}
