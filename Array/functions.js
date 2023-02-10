// find any array index
let array = ["Joy", "muhib", "MRJ"];
console.log(array.indexOf('GeeksforGeeks'));


var basicArray = [10, 20, 30, 40, 50];

// Set a value
basicArray[2] = 100;



// push method
let array1 = ['Namaz', 'Quran', 'Good behaviour', 'belive in luck'];
array.push('No haram');
console.log(array);


// pop method
let array2 = ["Sight controll", "Laziness", "impatience"];
let lastElement = array.pop();
console.log(lastElement);
console.log(array);

// shift method, like pop method , it takes the first one.
let array3 = ["Laziness", , "Sight controll", "impatience"];
let firstElement = array.shift();
console.log(firstElement);
console.log(array);


// Oposite of shift method
let array4 = ['Namaz', 'Quran', 'Good behaviour', 'belive in luck'];
array.unshift("No haram");
console.log(array);



// check if any element are in exist in array
let array5 = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array.includes("GeeksforGeeks"));
console.log(array.includes("React"));



// Slice just take the array element but not effect the original array
// Splice affect the original array
let arr = [1, 2, 3, 4, 5];

let sliceArray = arr.slice(0, 2);
console.log("Original Array: " + arr);


let spliceArray = arr.splice(0, 2);
console.log("Original Array: " + arr);







