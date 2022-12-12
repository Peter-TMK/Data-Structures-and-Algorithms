// const array = [3,4,5,1,2]
const array = [4,5,6,7,0,1,2]
let result = array[0];
let left = 0, right = array.length - 1;

while (left <= right){
    if (array[left] < array[right]){
        result = Math.min(result, array[left])
        break;
    }
    middle = Math.round((left + right)/2)
    result = Math.min(result, array[middle])

    if (array[middle] >= array[left]){
        left = middle + 1
    } else {
        right = middle - 1
    }
}
console.log(result)
