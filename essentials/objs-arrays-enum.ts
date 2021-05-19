//const person: {
//    name: string;
//    age: number;
//} = {

enum Role {
    ADMIN  ,
    READ_ONLY,
    AUTHOR,
    POJO ,
    JOJO
}

const person: {
    name: string,
    age: number,
    hobbies: string[],
   //role: [number, string] - tuple
    role: number
} = {
    name: 'Eduardo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}
//person.role.push('admin')
//person.role[1] = '10';
//person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of favoriteActivities) {
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()) !!! ERROR !!!
}