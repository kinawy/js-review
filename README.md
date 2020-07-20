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
## More DOM Manipulation
### Create new elements, append them, add event listener, used a for loop to go through the array and get the data

```
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
});```



