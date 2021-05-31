// Declaring functions with types annotations -----------------------------------

// when to use
// Always
const add = (a: number, b: number): number => {
    return a + b;
}
add(1, 2);

function divide(a: number, b: number): number {
    return a / b;
}

divide(1, 2);

const multiply = function (a: number, b: number): number {
    return a / b;
}
multiply(1, 2);


// destructuring arguments
const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}
// const logWeather = ({date, weather}: ...
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}
logWeather(todayWeather)

// 'void' returns nothing
const logger = (message: string): void => {
    console.log(message)
}
// 'never' never reach the end of the function (throw Error)
const throwError = (message: string): never => {
    throw new Error(message);
}

// Declaring prototype of a function
let combineValues: (n1: number, n2: number) => number;
combineValues = add;
combineValues(8, 8);

// declaring callback as argument
function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
    return 20; // this return wont affect because the cb has void return type
})

// function overload
type Combinable = string | number;

function plus(a: number, b: number): number;
function plus(a: string, b: string): string;
function plus(a: string, b: number): string;
function plus(a: number, b: string): string;
function plus(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString()
    return a + b;
}

const result = plus('Max', 20);
result.split(' ');



// Declaring functions with types inference -----------------------------------

// when to use
// Never
const subtract = (a: number, b: number) => {
    // a - b  makes return type 'void'
    return a - b;
}
subtract(1, 2);
