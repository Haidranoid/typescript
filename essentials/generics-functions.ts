/*const names: Array<string> = []  // string[]
//names[0].split(' ')

const promise: Promise<string> = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve('This is done!')
        }, 2000)
    } catch (e) {
        reject(e.message)
    }
})

promise.then(data => {
    data.split(' ');
})*/

// Generics -----------------------------------------------------------
function merge<T, U>(objA: T, objB: U) {
    //return {...objA, ...objB};
    return Object.assign(objA, objB)
}

// Constrains ----------------------------------------------------------
function merge2<T extends object, U extends object>(objA: T, objB: U) { // constrains
    //return {...objA, ...objB};
    return Object.assign(objA, objB)
}

interface Object1 {
    name: string;
    hobbies: string[],
}

interface Object2 {
    age: number;
}

//const mergedObj = merge<Object1, Object2>({name: 'Max', hobbies: ['Sports']}, {age: 30});
const mergedObj = merge2({name: 'Max', hobbies: ['Sports']}, {});
console.log(mergedObj)

interface Lengthy {
    length: number,
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText: string;
    if (element.length === 1)
        descriptionText = 'Got 1 element.';
    else
        descriptionText = 'Got ' + element.length + ' elements.'

    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'))

// keyof constraints -------------------------------------------------------------
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConvert({name: 'hi'}, 'name'))