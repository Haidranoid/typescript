// type casting --------------------------------------------------------

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement)
    (userInputElement as HTMLInputElement).value = 'Hi there!'