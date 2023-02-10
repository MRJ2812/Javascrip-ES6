// Math.max don't work in array.
const number = Math.max([10, 20, 30, 40])
console.log(number);

// it's work only in number
const number1 = Math.max(10, 20, 30, 40)
console.log(number1);

// If we want to use it in array we have to use (...arrayName) --> spread out
const number2 = [10, 20, 30, 40]
console.log(Math.max(...number2));