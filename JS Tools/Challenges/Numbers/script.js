let x
let y

x = Math.floor(Math.random() * 100)
y = Math.floor(Math.random() * 50)

const sum = x + y
const difference = x - y
const product = x * y
const quotient = (x / y).toFixed(2)
const remainder = x % y

console.log(`
${x} + ${y} = ${sum} \n
${x} - ${y} = ${difference} \n
${x} * ${y} = ${product} \n
${x} / ${y} = ${quotient} \n
${x} % ${y} = ${remainder} \n
`)  
