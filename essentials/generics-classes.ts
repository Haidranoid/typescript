// classes ---------------------------------------------------------
class DataStorage<T extends (string | number)> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>()

//const objStorage = new DataStorage<object>();
//objStorage.addItem({name: 'Max'})
//objStorage.addItem({name: 'Manu'})
//objStorage.removeItem({name: 'Max'})
//console.log(objStorage.getItems())

class Attributes<T> {
    constructor(private data: T) {
    }

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }
}

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const attrs = new Attributes<UserProps>({
    id: 5,
    age: 20,
    name: 'adfs',
})

const name2 = attrs.get('name');
const age = attrs.get("age");
