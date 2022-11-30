array = [3,4,5,7]
target = 11

function twoSum(array, target){
    let map = {};
    for(let index = 0; index < array.length; index++){
        diff = target - array[index];
        if(map[diff] !== undefined){
            return [map[diff], index];
        } else {
            map[array[index]] = index;
        }
    }
    return
}

const _2sum = twoSum(array, target)
console.log(_2sum)