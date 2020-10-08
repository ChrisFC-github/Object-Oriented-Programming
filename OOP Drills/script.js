// Write 5 object literals, have them named person1-person5. Give each a name property and have this be a name of a friend or family member. 
// Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.
var p1 = { // this is an object literal
    name: 'Aaron D',
    sayHello: function () { // creating a property which is a function
        console.log(`Hello! My name is ${this.name}.`); //template literal
    }
};

var p2 = {
    name: 'Franco L',
    sayHello: function () { // creating a property which is a function
        console.log(`Hello! My name is ${this.name}.`); //template literal
    }
};

var p3 = {
    name: 'Ally L',
    sayHello: function () { // creating a property which is a function
        console.log(`Hello! My name is ${this.name}.`); //template literal
    }
};

var p4 = {
    name: 'Fred S',
    sayHello: function () { // creating a property which is a function
        console.log(`Hello! My name is ${this.name}.`); //template literal
    }
};

var p5 = {
    name: 'Selina F',
    sayHello: function () { // creating a property which is a function
        console.log(`Hello! My name is ${this.name}.`); //template literal
    }
};

// Call the sayHello function on each object and check the console for a response
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named 
// with starting with a capital letter ex: function Example() null).

function Personn(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

// using prototype becaause we are using this context of a function which is not a method under a certain class 
Personn.prototype.sayHello1 = function () {
    console.log(`Hello my name is ${this.name}, I am of ${this.age} years, and I live in ${this.city}`)
}

//creates a new person object (5 instances) p# passing in the ff info with the Person constructor function
let personn1 = new Personn('Aaron D', 'Cebu', 21);
let personn2 = new Personn('Franco L', 'Orlando', 22);
let personn3 = new Personn('Ally L', 'Orlando', 23);
let personn4 = new Personn('Fred S', 'Birmingham', 24);
let personn5 = new Personn('Selina F', 'Cebu', 25);

//calls the 5 new created instances
personn1.sayHello1();
personn2.sayHello1();
personn3.sayHello1();
personn4.sayHello1();
personn5.sayHello1();

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    // this is where you insert methods of functions you want to create
    sayHello2() {
        console.log(`Hello my name is ${this.name}, I am of ${this.age} years, and I live in ${this.city}`)
    }
}

let person1 = new Person('Aaron D', 'Cebu', 21);
let person2 = new Person('Franco L', 'Orlando', 22);
let person3 = new Person('Ally L', 'Orlando', 23);
let person4 = new Person('Fred S', 'Birmingham', 24);
let person5 = new Person('Selina F', 'Cebu', 25);

person1.sayHello2();
person2.sayHello2();
person3.sayHello2();
person4.sayHello2();
person5.sayHello2();


// Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
// - So let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
// - All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
// - So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
// Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is,
// who made it, and how many wheels it has. You can hardcode the type or specify it as an additional property on each class.
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer}. It has ${this.numOfWheels} wheels.`);
    }
}

// Trucks are vehicles, they have wheels. So let’s create a vehicle class that inherits the property of wheels from vehicle, 
// but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.
class Truck extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, hasTruckBed) {
    //super instructing that you are creating a new instance of the class and passing in the old values of the parent class
        super (manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.hasTruckBed = hasTruckBed;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer}. It has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors. Does this have a truckbed? ${this.hasTruckBed}`);
    }
}
// but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.

// Now sedans are vehicles also, but they don’t have a truck bed (We’re ignoring the fact El Caminos broke this rule), they do have doors as well as 4 wheels.
// So to practice inheritance, lets just say sedans are vehicles, they aren’t trucks because they don’t have a truck bed but they get good gas mileage. Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
class Sedan extends Vehicle {
    constructor (manufacturer, numOfWheels, size, mpg) {
        super (manufacturer, numOfWheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer}. It has ${this.numOfWheels}. It has ${this.size}. It has ${this.mpg}.`);
    }
}

// Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically).
// So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
class Motorcycle extends Vehicle {
    constructor (manufacturer, numOfWheels, hasHandlebars, hasDoors) {
        super (manufacturer, numOfWheels)
        this.hasHandlebars = hasHandlebars;
        this.hasDoors = hasDoors;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer}. It has ${this.numOfWheels}. Does it have handle bars? ${this.hasHandlebars}. Does it have doors? ${this.hasDoors}.`);
    }
}

// LAST ONE: Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it.
// Override the aboutVehicle method in each child class to console log a string that represents these features, but still have it log the type, manufacturer and how many wheels it has!


//new instances of the parent all the way to the childs and then calls respective method with child adjustments in the aboutVehicle method
let vehicle1 = new Vehicle("Honda", 4);
vehicle1.aboutVehicle();

let truck = new Truck("Dodge", 4, 2, true);
truck.aboutVehicle();

let sedan1 = new Sedan("Honda", 4, "mid-sized", 30);
sedan1.aboutVehicle();

let motorcycle1 = new Motorcycle("Honda", 2, false, false);
motorcycle1.aboutVehicle();
