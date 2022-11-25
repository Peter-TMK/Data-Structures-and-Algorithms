// Given 2 arrays, cretae a function that lets users know (true/false)
// whether these 2 arrays contain any common items

// For Example:

// =============Good Code=============================

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'f'];

function commonItems(arr1, arr2){
    for (let i=0; i < arr1.length; i++){
        for (let j=0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                // console.log("Match found!")
                return true;
            }
        }
    }
    return false;
}
commonItems(array1, array2)