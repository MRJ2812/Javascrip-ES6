function addName(value) {
    console.log(value)
    // return value;
}

// function addage(value) {
//     return value;
// }

function student(functionName, value) {

    console.log('Student Name :', functionName(value));

}

const callFunction = student(addName, 'Joy');
// const callFunction2 = student(addage,'Joy');
console.log(callFunction)