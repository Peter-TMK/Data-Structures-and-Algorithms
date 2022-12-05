const nums = [1,2,3,4]

let res = []
let preNum = 1
for (let i=0; i < nums.length; i++){
    res[i] = preNum
    preNum = preNum * nums[i]
}

let postNum = 1
for (let i=nums.length -1; i>=0; i--){
    res[i] = res[i] * postNum
    postNum = postNum * nums[i]
}

console.log(res)