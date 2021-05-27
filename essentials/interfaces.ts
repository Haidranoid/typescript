// Defining type of each property of an object --------------------------------------

interface Person {
    name: string;
    age: number;

    getDescription(): string;

    say(message: string): void;

    greet: (phrase: string) => void;
}

const user: Person = {
    name: 'Max',
    age: 22,
    getDescription(): string {
        return this.name + ' ' + this.age;
    },
    say(message: string) {
        console.log(this.name + ' says ' + message)
    },
    greet: (phrase: string) => {
        console.log(phrase + ' ' + name) // cannot access to object properties
    },
}

const printUser = (user: Person) => {
    user.getDescription();
}
printUser(user);

// inheritance of interfaces -------------------------------------------------------

interface Named {
    readonly name?: string;
    output?: string;
}

interface Greetable extends Named {
    saySomething(phrase: string): void;
}

// implementing interfaces --------------------------------------------------------

class Human implements Greetable {
    readonly name?: string;
    age = 30;

    constructor(name?: string) {
        if (name)
            this.name = name;
    }

    saySomething(phrase: string): void {
        if (this.name)
            console.log(this.name + ' says ' + phrase)
        else
            console.log('unknown says ' + phrase)

    }
}

const user2: Greetable = new Human('eduardo');
//user2.name = '20';


// Defining type of a functions argument and return -----------------------------------------
type AddFn = (a: number, b: number) => number;
//interface AddFn {
//    (a: number, b: number): number;
//}
let add: AddFn;
add = (a, b) => a + b;


