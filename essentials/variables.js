"use strict";
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1; // you MUST declare the type if the value will be assign later
number1 = 5;
var number2 = 2.8; // infers the type if it is declared when initialized
var printResult = true; // infers the type if it is declared when initialized
var resultPhrase = 'Result is: '; // infers the type if it is declared when initialized
add(number1, number2, printResult, resultPhrase);
