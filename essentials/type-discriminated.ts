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