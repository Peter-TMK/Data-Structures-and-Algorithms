array = [-2,0,-1]

result = max(array)
currMin, currMax = 1, 1

for num in array:
    temp = num * currMax
    currMax = max(num * currMin, num * currMax, num)
    currMin = min(temp, num * currMin, num)

    result = max(result, currMax)
print(result)

    