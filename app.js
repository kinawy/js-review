let name = 'Sameh';
let age = 32;
let isCool = true;
const friends = ['Adham', 'Mike', 'Tony', 'Chris', 'Sam'];

console.log(name, age, isCool, friends);

const tesla = {  // Can understand Objects pretty well, accessing the key, value pair with methods is another thing.
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMember: ['Elon Musk', 'JB Straubel', 'Maritin Eberhard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function () {
        console.log('The CEO of Tesla is ' + this.ceo); // You can add functions to objects, way to access it is below, this is interesting, wonder what the application is.
    }
}

tesla.stockPrice = 1643.00; // Adds to an object

console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla['vehicles']['vehicleThree']);

tesla.print();

let phone = 'iPhone XS Max';
let yearBought = 2019;
let stillWorks

const sameh = { // You can use functions in objects to do a ton of stuff, but not arrow functions
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
console.log(sameh);

function printRoommates (array) { // forEach is just a fancy way of iterating over an array, or even arrays inside objects
    array.forEach(friend => {
        console.log(friend);
    })
};

printRoommates(friends);
printRoommates(sameh.roomMates); // You can pass it arrays inside objects as well.

function printName (element) {
    console.log(element);
};

friends.forEach(function(friend){
    printName(friend);
});


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
console.log(headerTwo);

// This should remove a class, not sure why it's not working

headerTwo.classList.remove('header-two');
console.log(headerTwo);

// Adding an eventListener

headerTwo.addEventListener('click', function () { // will change the inner text of the headerTwo element which is my h2 on click
    headerTwo.textContent = 'Sameh';
});

// make another element

const headerThree = document.createElement('h2');

headerThree.textContent = 'Friends';

container.appendChild(headerThree); // Appends the new header

console.log(headerThree);

const list = document.createElement('ul');








// iterate through the friends array
for (i =0; i < friends.length; i++) { // iterates over the array, then sets variables for the iterator and creating list items
        
    // reference or grab each friend
    let eachFriend = friends[i];

    // create a li or list
    const listItem = document.createElement('li');

    // add textContent to that li
    listItem.textContent = eachFriend;

    // append that to a ul or unordered list
    list.appendChild(listItem); // appends the list items to the unordered list
        
    }
    
console.log(list);

// adds an event listener to headerThree which appends the list to it
headerThree.addEventListener('click', function () {
    container.appendChild(list); // appends the newly created ul and all the other parts to the container class div
});

// Problem Solving

// What do I start with.
// What do I hope to end up with.

// Understand the problem.
// Understand where your issues are starting, and what you're looking at.

// Break it down into more manageable problems.

// - [ ] Do I understand what the prompt is asking?
// - [ ] Am I able to break the problem down?
// - [ ] What is my strategy for solving the problem?
// - [ ] Do I understand what my code is doing?
// - [ ] Am I able to foresee any edge cases?
// - [ ] Am I able to track the order of the code that is being executed?
// - [ ] Am I able to track the values of the variables?
// - [ ] Am I able to walk through my code line by line with an example?
// - [ ] Do I have a working solution?

// FizzBuzz

// Write a function that does the following:
    // Takes in an array.
    // Check each number in the array.
    // Check if each number is divisible, using the modulus operator, by 5 and 3 its equal to === FizzBuzz
    // If the number is divisible by 3 its equal to === Fizz
    // If the number is divisible by 5 its equal to === Buzz

    // For Example:
    // [3, 5, 15, 20, 9, 7]
    // This would ouput ['Fizz', 'Buzz', 'FizzBuzz', 'Fizz']

    // Empty array to store the string.
    let fizzArr = [];

    // A function that takes an array of numbers, using array as a parameter or placeholder.
    function fizzBuzz (array) {
        
        // Iterate through the array passed to it
        for (let i = 0; i < array.length; i ++) {

            // Assign a variable to each number being iterated trough in the array
            let num = array[i];

            // Give conditionals saying if the number is divisible by x, push this string into the empty array.
            if (num % 3 === 0 && num % 5 === 0) {
                fizzArr.push('FizzBuzz');
            } else if (num % 5 === 0) {
                fizzArr.push('Buzz')
            } else if (num % 3 === 0) {
                fizzArr.push('Fizz')
            } else {
                fizzArr.push(num);
            }
        }  return fizzArr;
    }

    console.log(fizzBuzz([3, 6, 15, 18, 215, 213, 211]));

