// Write a function that checks if an element is inside of an array

function isInside (array, ele) {
    let indexArray = array.indexOf(ele);
    if (indexArray != -1){
        return true;
        } else {
            return false;
        }
     
}

console.log(isInside(['taylor', 'rome', 'adam'], 'mom'));


// Write a function that reverses string
// I used the split method to split each character into an array
// Then I used the reverse method to reverse the array
// Then I used the join method to rejoin all of the seperated characters inside of the array into a backwards word.
function reverseStr (string) {
    // 
        return string.split("").reverse().join("");
           
    
   
}

console.log(reverseStr('hello'));



// function everyOtherWord (sentence) {
//     let wordCount = 0;

//     let arr = [];
    
//     let sentSplit = sentence.split(' ');
//     console.log(sentSplit);

//     for (let i = 0; i < sentSplit.length; i+2) {
//         arr.push(sentSplit[i]);
        
//     }
//     return arr;
// }

// console.log(everyOtherWord('hello how are you doing on this lovely day?'));

function luckySevens(max) {
    const array = [];
    let numb = Math.floor(max/7);
    for (let i = 0; i < numb; i++) {
        numb2 = (i + 1) * 7;
        array.push(numb2);
    }
    return array;
}
console.log(luckySevens(25))






function copyMachine(element, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(element);
    }
    return result;
}
console.log(copyMachine('bread', 4))

