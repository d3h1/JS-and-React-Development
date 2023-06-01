// !Challenge 1 -- arr = [6, 5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
arr.reverse().push(0);
arr.unshift(6);


console.log(arr);

// !Challenge 2 -- arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2.splice(1,5))
console.log(arr3);

