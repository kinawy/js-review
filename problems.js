// Write a function that checks if an element is inside of an array

function isInside (array, ele) {
    // Create variable for the index of our element
    let indexArray = array.indexOf(ele);
    // Create a condition checking if our element is inside of our array, if it is inside, its not at index -1 and will return true
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
    // this function just returns the string split with no space so it goes by character in an array with the split method, then using the reverse array method it reverses it, then rejoins with the join array method to be the reversed string.
        return string.split("").reverse().join("");
           
    
   
}

console.log(reverseStr('hello'));
// What me and Martin got, I understand the following way more though
// function luckySevens(max) {
//     // Created an empty array to store the numbers.
//     const array = [];

//     let numb = Math.floor(max/6);
//     for (let i = 0; i < numb; i++) {
//         numb2 = (i + 1) * 6;
//         array.push(numb2);
//     }
//     return array;
// }
// console.log(luckySevens(62));
// 
function luckySevens(max) {
    // Empty array to store the numbers
    let luckyArray = []
    // Loops through max number
    for (let i = 1; i <= max; i++) {
        // Creates a condition saying if i modulus 7 has a remainder of 0, push i into our lucky array.
        if(i % 7 == 0) {
            luckyArray.push(i)
        }
    }
    // return
    return luckyArray
}

console.log(luckySevens(52));

function copyMachine(element, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(element);
    }
    return result;
}
console.log(copyMachine('bread', 4))





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










