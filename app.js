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

// iterate through the friends array
// reference or grab each friend
// create a li or list
// add textContent to that li
// append that to a ul or unordered list

const list = document.createElement('ul');


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















