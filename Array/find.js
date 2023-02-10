// return the first value match

let arr = [1, 2, 3, 4, 5];

let findElement = arr.find(element => {
    return element > 4
});


// We generally use this method.
// let findElement = arr.find(element=>element > 4 );

console.log(findElement);





///////////////////////////////////
let arr1 = [1, 2, 3, 4, 5];

let findIndexValue = arr1.findIndex((element) => element >= 4);
console.log(findIndexValue);

