const containsDuplicate = function(nums) {
    hash = {}
    for (let num of nums){
        if (num in hash){
            return true;
            break;
        } else {
            hash[num] = true;
        }
    }
    return false;
};

const nums = [3,4,5,2,3,1,4]
console.log(containsDuplicate(nums))
