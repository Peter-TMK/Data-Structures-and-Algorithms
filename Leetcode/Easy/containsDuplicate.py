def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    hash = {}
    for num in nums:
        if num in hash:
            return True
            break
        else:
            hash[num] = True
    return False

nums = [3,4,5,2,3,1,4]
print(containsDuplicate(nums))