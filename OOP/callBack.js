// Easy way to understand inheritance.

function addName(value) {
    console.log('Name:', value)
}

function addage(value) {
    console.log('Age:', value)
}

function student(functionName, value) {
    functionName(value);
}

student(addName, 'Himu');
student(addage, 20);
