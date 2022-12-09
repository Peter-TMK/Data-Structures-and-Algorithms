array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

maxSub = array[0]
currSum = 0

for num in array:
    if currSum < 0:
        currSum = 0
    currSum += num
    maxSub = max(currSum, maxSub)

print(maxSub)