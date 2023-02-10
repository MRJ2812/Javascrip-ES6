// if we simply copy an array by "=" sign, and then change second array , the first array will change,
// so we have to copy an array by another way (spreadOut)

let array1 = [10, 20, 30, 40];

let array2 = [...array1];// must use [] bracket.

console.log(array2);


///////////////////////////

let array3 = [100, ...array1, 200];

console.log(array3);



////////////////////
let array4 = [...array2, ...array3];

console.log(array4);