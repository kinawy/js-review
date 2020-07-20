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

const sameh = {
    city: 'Boston',
    yearBorn: 1989,
    roomMates: ['Sanjeev', 'Ollie'],
    mom: 'Jane',
    streets: {
        street1: 'Perthshire Road',
        street2: 'Barrows Street',
        street3: 'Adamson Street'
    }
    faveStreet: function () {
        this.streets.street4 = 'Rugg Road'
    }
}



