# NOTES 
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
#### DOM Functionalities
```js
('contextmenu', () => {}); // Right Click
``` 



 