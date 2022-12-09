array = [2,3,-2,4]

let result = Math.max(...array)
let currMin = 1;
let currMax = 1;

for (let num of array){
    let temp = num * currMax
    currMax = Math.max(num * currMin, num * currMax, num)
    currMin = Math.min(temp, num * currMin, num)

    result = Math.max(result, currMax)
}
console.log(result)
