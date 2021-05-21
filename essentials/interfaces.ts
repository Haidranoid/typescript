interface Person {
    name: string;
    age: number;
    greet: (phrase: string) => void;

    say(message: string): void;
}

const user1: Person = {
    name: 'Max',
    age: 22,
    greet: (phrase: string) => {
        console.log(phrase + ' ' + name) // cannot access to object properties
    },
    say(message: string) {
        console.log(this.name + ' says ' + message)
    },
}


interface Named {
    readonly name?: string;
    output?: string;
}

interface Greetable extends Named {
    saySomething(phrase: string): void;
}

class Human implements Greetable {
    readonly name?: string;
    age = 30;

    constructor(name?: string) {
        if (name)
            this.name = name;
    }

    saySomething(phrase: string): void {
        if(this.name)
            console.log(this.name + ' says ' + phrase)
        else
            console.log('unknown says ' + phrase)

    }
}

const user2: Greetable = new Human('eduardo');
//user2.name = '20';


type AddFn = (a: number, b: number) => number;
//interface AddFn {
//    (a: number, b: number): number;
//}
let add: AddFn;
add = (a, b) => a + b;


