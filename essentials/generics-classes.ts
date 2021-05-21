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