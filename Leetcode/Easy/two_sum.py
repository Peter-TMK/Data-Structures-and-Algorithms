array = [3,4,5,7]
target = 11

def two_sum(array, target):
    map = {}
    for index, value in enumerate(array):
        # print(index, value)
        diff = target - value
        if diff in map:
            return (map[diff], index)
        map[value] = index
    return

_2sum = two_sum(array, target)
print(_2sum)