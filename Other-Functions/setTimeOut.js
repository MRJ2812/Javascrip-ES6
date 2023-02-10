// 1000 = 1 sec
const timeOut = () => {
    console.log('Second')
}

console.log('first');
setTimeout(timeOut, 5000)
console.log('third');





////////////////////////////////////////////////////////////////
// Inline arrow function.
setTimeout(() => console.log('joy'), 5000)