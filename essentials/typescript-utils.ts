// Generic Utility Types ------------------------------------------------------------
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // makes all the CourseGoal properties optionals
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna']; // makes all the properties readonly
// names.push('Manu');


// index properties ----------------------------------------------------------
interface ErrorContainer { // { email: 'Not a valid email', userName: 'Must start with a character' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    userName: 'Must start with a capital character!'
}


// optional chaining ----------------------------------------------------------
const fetchedUserData = {
    id:'ui',
    name:'Max',
    //job: {title: 'CEO', description:'My own company'}
}
//console.log(fetchedUserData?.job?.title)


// Nullish coalescing ----------------------------------------------------------
const userInput = null;

// ?? means null or undefined  -
const storedData = userInput ?? 'DEFAULT';