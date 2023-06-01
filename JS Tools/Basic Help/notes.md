# NOTES 
```js

```
## DEFINITIONS
| Term      | Description |
| ----------- | ----------- |
| Primitive Types | Number, Boolean, Null, Undefined, Symbol, BigInt -- Work with out storage or reference |
| Reference Types   | Arrays, Functions, Objects -- Stored and Referenced |

## JS FUNCTIONALITY
'THIS' does NOT work with arrow functions, 
We need to use a regular function such as 
#### Arrow & Regular Functions
```js
//'THIS' does NOT work with arrow functions so we have to use below         
this.appendChild(x);
```
#### Arrays and Objects
Two Different Ways 
```js
    const nums = [1, 2, 3, 4, 5]; // Array Literal -- This one is used more

    const fruits = new Array('apple', 'grape', 'orange'); // Array Contruct
```
You can use any type and they are mutable
```js
    const mixed = [1,'bat',true,undefined]; // All called by their index
    mixed[2] = false // This will change true to false
```
###### Array Methods
```js
    let x;
    const numbers = [1,2,3,4,5];

    numbers[numbers.length] = 6; // Adds the value to the back of the array or the length of it
    numbers.push(100); //Adds to the last index
    numbers.pop(); // removes from the end
    numbers.unshift(99); // Added to the '0' index
    numbers.shift(); // Removes from that '0' index

    x = numbers.include(6) // Return if nums includes 6 or not
    x = numbers.indexOf(3) // Index of this number
    x = numbers.slice(0, 2) // Slices array based on index numbers (including the index called out)
    x = numbers.splice(1, 4) // Changing array and plucking these values 
    x = numbers.slice(3, 1) // Splice at index 3 for only 1 value

    x = numbers.splice(1, 4).reverse().toString(); // You can even chain functions
```
###### Nesting Arrays
```js
    const num1 = [1, 2, 3, 4];
    const num2 = [5, 6, 7, 8];

    // You can do all kinds of things such as . . .
    num1.push(num2) // num2 will be inside the array of num1
    num1[4][2] // finding the value in the second array (idx 4) and its third value (idx 2)

    const num3 = [num1, num2] // Arrays inside another array -- SAME CONCEPT with indexes

    x = num1.concat(num2) // [1,2,3,4,5,6,7,8]
 
    // SPREAD OPERATOR
    x = [...num1, ...num2]; // [1,2,3,4,5,6,7,8]

```
#### Variables & Simular  
Type Conversion can be done in multiple ways         
```js 
amount = +amount; //Adding a plus in front parses this as a number
amount = parseInt(amount); // Another way of type conversion
amount = Number(amount); // Another way
``` 
Strings and their functions
```js
const s = new String('Hello World') // We do NEW STRNG to turn this into to object to make proto work
x = s.__proto__; // Shows you keys, what youu can do with this string, etc
```
Dates -- Check Date Object for more
```js
    let x;
    let d = new Date();

    // Some Common Date Values
    x = d.toString()
    x = d.getTime()
    x = d.valueOf()
    x = d.getFullYear() // Will get current or you can pass in a date above
```
#### DOM Functionalities
```js
('contextmenu', () => {}); // Right Click
``` 



 