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

// This should remove a class, not sure why it's not working

headerTwo.classList.remove('header-Two');







