function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

let number1: number; // you MUST declare the type if the value will be assign later
number1 = 5;
const number2 = 2.8; // infers the type if it is declared when initialized
const printResult = true; // infers the type if it is declared when initialized
let resultPhrase = 'Result is: '; // infers the type if it is declared when initialized

add(number1, number2, printResult, resultPhrase);