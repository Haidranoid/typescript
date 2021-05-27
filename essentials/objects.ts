const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

// destructuring ---------------------------------------------

// const {age}: number  !! ERROR !!
// needed by this
//const {age, name}: number = profile;  'age' or 'name' is a number? both?
const {age}: { age: number } = profile;


const {coords: {lat, lng}}: { coords: { lat: number, lng: number } } = profile