let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//userName = userInput 'unknown is unasignable to string
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {
        message,
        code,
    }
    // while (true):never {}
}

generateError('An error occurred!', 500);