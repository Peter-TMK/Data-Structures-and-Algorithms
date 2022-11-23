// Finding Nemo

// const nemo = ['nemo'];
const persons = ['Faith','Blessing','nemo','Gift','Favour','Rejoice']
// const large = new Array(20).fill('nemo');

function findNemo(array){
    let t1 = performance.now();
    for (let i=0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
            break;
        }
    }
    let t2 = performance.now();
    console.log(`The operation took ${t2-t1} milliseconds`)
}
// findNemo(nemo)
findNemo(persons)
// findNemo(large)
