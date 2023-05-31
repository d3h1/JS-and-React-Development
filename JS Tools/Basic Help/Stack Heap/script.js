// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference Values store on the heap
const person = {
    name: 'Brad',
    age: 40
}

let newName = name;
newName = 'bob'

let newPerson = person
newPerson.name = 'Deni'

console.log(name, newName);
console.log(person, newPerson);