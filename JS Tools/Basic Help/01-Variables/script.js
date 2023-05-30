// LET -- Can Change
let age = 10
// console.log(age)

age = 15
// console.log(age)

// !------------------------!
// CONST -- Cannot Change with out specfic functionalities -- Mainly use const unless let is specifically needed 
const firstName = 'Deni'
// console.log(firstName)

const x = 100
const arr = [1, 2, 3, 4]
arr.push(5)

// Different array functions that will allow for better and needed things on common applications
arr.forEach((num,idx) => {
    console.log(num, idx)
})

// You can change person itself but everything inside of it you can
const person = {
    name: 'Deni',
    age: 23,
    gender: 'male',
    happy: true,
}

// You can change inside the object
console.log(person.name)
person.name = 'Bob'
console.log(person.name)

// You can add inside the object
person.email = 'dcab101@gmail.com'
console.log(person)

const d = 10, e = 5, f = 30
console.log(d + e + f)