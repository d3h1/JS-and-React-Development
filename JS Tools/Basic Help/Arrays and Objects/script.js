let x, z;

const numbers = [12, 13, 14, 15, 16];
const mixed = [1,'bat',true,undefined];

x = numbers[0] // Call numbers inside by index
x = `My favorite number is ${numbers[0]}`;
x = mixed[2]


mixed[2] = false; //
z = mixed[2]

console.log(x, z);





const nums = [1, 2, 3, 4, 5];

nums.push(100);
nums.pop();
nums.unshift(99);
nums.shift();
nums.reverse();

console.log(nums);

let d;
d = nums.includes(20);
d = nums.slice(1,4);

d = nums.splice(1, 4).reverse().toString().charAt(0);


console.log(d);