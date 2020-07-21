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

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.

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

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.


// function copyMachine(element, num) {
//     // Empty array to store the values
//     const result = [];
//     // Loop through the number, and push elements into the array
//     for (let i = 0; i < num; i++) {
//         result.push(element);
//     }
//     return result;
// }


function copyMachine (element, number) {
    let array2 = [];
    // i can be either 1 or 0 here, doesnt matter
    let i = 1;
    // Since using while, while i is less than or equal to the number being passed, push the element into our new array
    while (i <= number) {
        array2.push(element);
        i++;
    }
    return array2;
}

console.log(copyMachine('bread', 4));

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.

function everyOtherWord (sentence) {
    
    // an empty array to store every other word
    let arr1 = [];
    // Splits our sentence up by word into a new array
    let sentSplit = sentence.split(' ');
    // Loop through our split sentence
    for (let i = 0; i < sentSplit.length; i ++) {
        // Write a conditional saying if its not true that i has a remainder of zero when divided by 2, push that word being iterated on into our array
        if (!(i % 2)) {
            arr1.push(sentSplit[i]);
        } 
    }
    // Return
    return arr1;

    
    
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'));

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

let words = "Go to the store and grab the following: milk, bread, run, and cake";

function wordYeller (sentence) {
    // First split the sentence into an array of words, we can create a variable for this.
    let splitSentence = sentence.split(' ');
    // Console.log
    console.log(splitSentence);
    // Create an empty array to store our new sentence in with the new punctuation
    let newSentenceArray1 = [];

    // Using for each we loop through our array created by split sentence
    splitSentence.forEach(function (word) {

        // Creating a variable that subtracts 1 from our word length, providing us with the last character of the word
        let wordLength = word.length - 1;
        // Creating a variable that stores the last character for us
        let lastCharacter = word[wordLength];
        console.log(lastCharacter);
        
        // Write a condition that checks against applicable punctuation, if the last character doesnt equal it, it pushes it in to the new array, otherwise if it doesn't it pushes it in with the exclamation point
        if (lastCharacter === '!' || lastCharacter === '.' || lastCharacter === ',' || lastCharacter === '?' || lastCharacter === ':') {
            newSentenceArray1.push(word)
        } else {
            
            let newWord = word + '!';

            newSentenceArray1.push(newWord);
        }

        })
        
        // Create a variable which rejoins our split string after the condition has been met

        let newSentence = newSentenceArray1.join(' ');

        return newSentence;
}

console.log(wordYeller(words));


// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

function arraySubString (words, string) {
    let newSubArray = [];

    words.forEach(element => {
        let subFound = element.includes(string);

        newSubArray.push(subFound);
    })
    return newSubArray;
}

console.log(arraySubString(['this', 'tis', 'not'], 'is'))












