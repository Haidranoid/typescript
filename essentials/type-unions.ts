// primitive unions
type Combinable = number | string;

// literal unions
type ConversionDescriptor = 'as-number' | 'as-text';

// interface unions
interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

type Role = Admin | Employee;


const combine = (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) => {
    let result;
    // type guard
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number')
        result = +input1 + +input2
    else
        result = input1.toString() + input2.toString()

    return result;
}

const combineAges = combine('30', '26', 'as-number');
console.log(combineAges)

const combineNames = combine('Max', 'Anna', 'as-number');
console.log(combineNames)
