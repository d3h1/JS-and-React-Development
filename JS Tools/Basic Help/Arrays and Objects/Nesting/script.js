const numbers = [1, 2, 3, 4];
const moreNums = [5, 6, 7, 8];

numbers.push(moreNums) // Nesting arrays

// ! To get within nested array you do . . .
let x;
x = numbers[4][3] ;
// ? Since you pushed the new array in, it pushes to index 4 and then you can get the index of that array since you are looking at this current array in the orignal array . . . ARRAYCEPTION 

// * You can even nest two arrays within an array
const allNums = [numbers, moreNums];
// I want to find 7 in the moreNums array
x = allNums[1][2] ;
// ? Look at the second array in allNums and then look at index 2 for the 3rd number 

const num1 = [1,2,3,4] // Arr 1
const num2 = [5,6,7,8] // Arr 2

x = num1.concat(num2) // Concats them and include them all in one array

console.log(x);