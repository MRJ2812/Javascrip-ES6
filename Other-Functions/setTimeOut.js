const timeOut = () => {
    console.log('Second timeOut')
}


console.log('first');
setTimeout(timeOut, 5000)
console.log('third');