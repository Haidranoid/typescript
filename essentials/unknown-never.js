"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//userName = userInput 'unknown is unasignable to string
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        code: code,
    };
    // while (true):never {}
}
generateError('An error occurred!', 500);
