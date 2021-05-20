// interception types ---------------------------------------------
interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee; // in objects combine the properties

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // in unions keeps the interception

const e2: Universal = 20;

// Guard types ------------------------------------------------------
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString()
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) // type guard with objects
        console.log('Privileges: ' + emp.privileges)
    if ('startDate' in emp) // type guard with objects
        console.log('StartDate: ' + emp.startDate)
}

printEmployee({name: 'Manu', startDate: new Date()})

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) // type guard with classes
        vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions -------------------- REDUX -----------------
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
    switch (animal.type) {
        case "bird":
            console.log(animal.flyingSpeed)
            break;
        case "horse":
            console.log(animal.runningSpeed)
            break;
    }
}
moveAnimal({type: 'bird', flyingSpeed: 200})

// type casting --------------------------------------------------------

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement)
    (userInputElement as HTMLInputElement).value = 'Hi there!'

// index properties ----------------------------------------------------
interface ErrorContainer { // { email: 'Not a valid email', userName: 'Must start with a character' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    userName: 'Must start with a capital character!'
}

// function overload ----------------------------------------------------
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

// optional chaining ----------------------------------------------------------
const fetchedUserData = {
    id:'ui',
    name:'Max',
    //job: {title: 'CEO', description:'My own company'}
}
//console.log(fetchedUserData?.job?.title)

// Nullish coalescing ----------------------------------------------------------
const userInput = null;

// ?? means null or undefined  -
const storedData = userInput ?? 'DEFAULT';