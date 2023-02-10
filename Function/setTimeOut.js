// “setTimeOut” is a asynchronous function.Even If we don’t give any time in “setTimeOut”,
// it will run after all operations. 
var x = 5;
x = 0;
setTimeout(() => {
    console.log(x);
})
console.log("Hello");
x = x + 1;