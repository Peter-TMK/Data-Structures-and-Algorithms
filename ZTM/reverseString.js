// Reversing a String

const day = 'Today is Friday';

const reverseDay = [];
for (let i= day.length-1; i>=0; i--){
    reverseDay.push(day[i])
}

console.log(reverseDay.join(''))