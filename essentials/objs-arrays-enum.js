"use strict";
//const person: {
//    name: string;
//    age: number;
//} = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["POJO"] = 3] = "POJO";
    Role[Role["JOJO"] = 4] = "JOJO";
})(Role || (Role = {}));
var person = {
    name: 'Eduardo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin')
//person.role[1] = '10';
//person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, favoriteActivities_1 = favoriteActivities; _i < favoriteActivities_1.length; _i++) {
    var hobby = favoriteActivities_1[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()) !!! ERROR !!!
}
