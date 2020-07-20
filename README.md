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

```
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