// set timeout --> for one time print.
// interval --> for print intervally

second = 0
const intervalId = setInterval(() => {
    console.log(second++);
    if (second === 10) {
        clearInterval(intervalId);               // for clear Interval we have to give intervalId
    }
}, 1000);



