const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let maxSub = array[0]
let currSum = 0

for (let num of array){
    // console.log(num)
    if (currSum < 0){
        currSum = 0;
    }
    currSum += num
    maxSub = Math.max(maxSub, currSum)
}
console.log(maxSub)

