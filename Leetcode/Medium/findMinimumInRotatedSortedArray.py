# array = [3,4,5,1,2]
array = [4,5,6,7,0,1,2]
result = array[0]
left, right = 0, len(array)-1

while left <= right:
    if array[left] < array[right]:
        result = min(result, array[left])
        break
    middle = (left - right) // 2
    result = min(result, array[middle])

    if array[middle] >= array[left]:
        left = middle + 1
    else:
        right = middle - 1
print(result)
