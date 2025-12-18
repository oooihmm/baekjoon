n = input() # 첫 번째 인풋 (정수)
numbers = list(input()) # 두 번째 인풋 -> 리스트로 
sum = 0

for i in numbers: # O(N)
    sum += int(i) 

print(sum)