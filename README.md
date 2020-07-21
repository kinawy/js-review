# Javascript Review  
This is Sameh's review of javascript.


## Examples of Data Types
```javascript
const sameh = {
    city: 'Boston',
    yearBorn: 1989,
    roomMates: ['Sanjeev', 'Ollie'],
    mom: 'Jane',
    streets: {
        street1: 'Perthshire Road',
        street2: 'Barrows Street',
        street3: 'Adamson Street'
    },
    faveStreet: function () {
        this.streets.street4 = 'Rugg Road';
        console.log(this);
    }
}

sameh.faveStreet();
console.log(sameh)
```

## Examples of Functions
```javascript
// standard function

function addNumbers (num1, num2) {
    return num1 + num2;
};

// function expression

const multiplyNumbers = function (num1, num2) {
    return num1 * num2;
};

// arrow function

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
```

## Dom Manipulation

```javascript
// DOM
// Grabs the container class from the Div
const container = document.querySelector('.container');

console.log(container);

// Creates an H2 then appends it below

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';



container.appendChild(headerTwo);

// add a class to the H2

headerTwo.classList.add('subtitle', 'header-two'); // adds a class
// headerTwo.setAttribute('class', 'header-two'); // This overrides the one right above it for whatever reason, will change any class inside

// This should remove a class, not sure why it's not working

headerTwo.classList.remove('header-Two');
console.log(headerTwo);
```
## More DOM Manipulation
### Create new elements, append them, add event listener, used a for loop to go through the array and get the data

```javascript
// make another element

const headerThree = document.createElement('h2');

headerThree.textContent = 'Friends';

container.appendChild(headerThree); // Appends the new header

console.log(headerThree);

const list = document.createElement('ul');



// iterate through the friends array
// reference or grab each friend
// create a li or list
// add textContent to that li
// append that to a ul or unordered list

for (i =0; i < friends.length; i++) { // iterates over the array, then sets variables for the iterator and creating list items
        let eachFriend = friends[i];
        const listItem = document.createElement('li');
        listItem.textContent = eachFriend;
        list.appendChild(listItem); // appends the list items to the unordered list
        
    }
    
console.log(list);
headerThree.addEventListener('click', function () {
    container.appendChild(list); // appends the newly created ul and all the other parts to the container class div
});
```
## I thought this was pretty Cool

```javascript
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
```

1. The if statement above, using the exclamation point outside of another set of parentheses, actually checks if its true or false, instead of whether there is a remainder.
2. I literally just realized while helping Nick on his deliverable that you can use Array.filter() on this question as well.
3. Just kidding I figured it out before I went to bed, using filter, I put a small explanation in this code snippet
```javascript
function everyOtherWord (sentence) {
    
    // Create an empty array
    let array4 = []
    // Split the sentence once again
    let sentSplit = sentence.split(' ');

    // Instead of using a for Loop, this one just uses the filter method to find the element and its index, if its index modulus 2 has a remainder of 0, push the element into my empty array. I'm not sure if i can do it with a regular function inside of this one, but I definitely think I can do the filter method outside of this function and get the same result, what i mean is all the research i did I could only figure it out while passing it an arrow function.
    let x = sentSplit.filter((element, index) => {
        if (index % 2 === 0) {
            array4.push(element);
        }
        
    })
    // Return
    
    return array4;
}



console.log(everyOtherWord('hello how are you doing on this lovely day?'));
```




