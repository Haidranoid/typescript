// Static types -----------------------------------------------------

//const carMakers: string[] = ...
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];
//const carByMake: string [][] ...
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(10); !!! ERROR !!!

// Help with 'map' 'forEach' and 'reduce'
carMakers.map((car) => {
    return car
})


// Flexible types ---------------------------------------------------

//const importantDates: (Date | string)[] ...
const importantDates = [new Date(),'2030-10-10'];
importantDates.push('2030-10-11');
importantDates.push(new Date());
