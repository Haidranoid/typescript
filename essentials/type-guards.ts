type Combinable = string | number;

interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

type UnknownEmployee = Employee | Admin;


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

// Guard types ------------------------------------------------------
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') // type guard with primitive/objects
        return a.toString() + b.toString()
    return a + b;
}
add(23,"50")

function printEmployee(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) // type guard with property in objects
        console.log('Privileges: ' + emp.privileges)
    if ('startDate' in emp) // type guard with property in objects
        console.log('StartDate: ' + emp.startDate)
}
printEmployee({name: 'Manu', startDate: new Date()})


function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) // type guard with classes
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);