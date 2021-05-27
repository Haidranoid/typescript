// Declaring variables with types annotations ---------------------------------

// when to use
// 1.- When we declare a variable on one line then initialize it later
let variable: number;
// ...
variable = 20;
// 2.- When we want a variable to have a type that can't be inferred (multiples types)
let mutable: string | number;
mutable = "An string";
mutable = 10;
// 3.- When a function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number } = JSON.parse(json); // parse() returns 'any'
console.log(coordinates)


// primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let obj: object = {};

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {
}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
}

// Function
const logNumber: (i: number) => void = (prop: number) => {
    console.log(prop);
}

// Declaring variables with types inference -----------------------------------

// when to use
// Always

// if declaration and initialization are on the same line,
// Typescript will figure out the type for us

let apples2 = 5;