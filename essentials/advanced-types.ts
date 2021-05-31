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