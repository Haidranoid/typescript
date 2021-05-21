// Decorator ----------------------------------------------
/*function Logger(constructor: Function) {
    console.log(logString)
    console.log(constructor);
}*/

// Decorators factory -------------------------------------
// classes decorators receive 1 argument -> constructor
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    //return function (_: Function) {
    return function <T extends { new(...args: any[]): { name: string } }>(prevConstructor: T) {
        return class extends prevConstructor {
            constructor(..._:/*args*/any[]) {
                super();
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@Logger('Loggin - Person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

const person = new Person();
console.log(person)

// --------------
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator! ');
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) { // can return
    console.log('Accessor decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { // can return
    console.log('Method decorator! ');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator! ');
    console.log(target)
    console.log(name)
    console.log(position)
}


class Product {
    @Log
    product: string;
    private _price: number;

    constructor(product: string, price: number) {
        this.product = product;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this.price * (1 + tax);
    }

    @Log2
    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error('Invalid price')

        this._price = value;
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(): any {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}


class Printer {
    message = 'This works';

    @AutoBind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
//button.addEventListener('click',p.showMessage.bind(p))

button.addEventListener('click', p.showMessage)

// -----------------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) return true;

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}


class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleElement = document.getElementById('title') as HTMLInputElement;
    const priceElement = document.getElementById('price') as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title,price)

    if (!validate(createdCourse)){
        alert('Invalid input, please try again!')
        return;
    }

    console.log(createdCourse)
})