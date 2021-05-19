const add = (n1: number, n2: number): number => {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(`Result: ${num}`)
}

printResult(add(5, 12))

let combineValues: (n1: number, n2: number) => number;
combineValues = add;

//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8, 8));


function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
    return 20; // this return wont affect because the cb has void return type
})
