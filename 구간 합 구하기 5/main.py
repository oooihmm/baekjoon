import sys
input = sys.stdin.readline # 시간초과 방지를 위해 입력이 많을 때는 readline 사용

n, m = map(int, input().split(' '))

A = [[0] * (n + 1)]
for i in range(n):
    row = [0]
    row.extend(list(map(int, input().split(' '))))
    A.append(row)

D = [[0] * (n + 1) for _ in range (n + 1)]
for x in range(1, n + 1):
    for y in range(1, n + 1):
        D[x][y] = D[x - 1][y] + D[x][y - 1] - D[x - 1][y - 1] + A[x][y]

for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split(' '))
    result = D[x2][y2] - D[x1 - 1][y2] - D[x2][y1 - 1] + D[x1 - 1][y1 - 1]
    print(result)
    