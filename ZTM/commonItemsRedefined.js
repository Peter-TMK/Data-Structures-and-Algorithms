// Given 2 arrays, cretae a function that lets users know (true/false)
// whether these 2 arrays contain any common items

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'b'];

function commonItems(arr1, arr2) {
    let map = {};
    for (let i=0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }

    for (let j=0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false
}
commonItems(array1, array2)