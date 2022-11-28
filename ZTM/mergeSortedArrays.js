function mergedSortedArray(arr1, arr2){
    mergedArray = []
    arrIndex1 = arr1[0]
    arrIndex2 = arr2[0]
    let i = 1
    let j = 1
    
    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }
    
    while(arrIndex1 || arrIndex2){
        if(!arrIndex2 || arrIndex1<arrIndex2){
            mergedArray.push(arrIndex1)
            arrIndex1 = arr1[i]
            i++
        } else {
            mergedArray.push(arrIndex2)
            arrIndex2 = arr2[j]
            j++
        }
    }
// console.log(mergedArray)
    return mergedArray;
}

mergedSortedArray([2,5,7],[3,9,11,13])