import sys
input = sys.stdin.readline

n, m = map(int, input().split())
A = list(map(int, input().split()))

D = [0] * (n + 1)
for i in range(1, n + 1):
    D[i] = D[i - 1] + A[i - 1]

remainderCount = [0] * m
R = [x % m for x in D]
for i in range(1, n + 1):
    remainder = R[i]
    remainderCount[remainder] += 1

count = 0
count += remainderCount[0]
for i in range(m):
    k = remainderCount[i]
    count += int(k * (k - 1) / 2)

print(count)