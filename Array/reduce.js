// Array reduce function.
// it can do normally equations and only return the final value.

let oldArray = [1, 2, 3, 4, 5];

let sumOfElements = oldArray.reduce(
    function (accumulator, element) {
        return accumulator + element;
    });

console.log(sumOfElements);