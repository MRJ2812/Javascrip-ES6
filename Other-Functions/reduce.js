// It's not very important
// it's like sum = 0
// sum = sum + arr[i]  --> previous = previous + currentValue 


let array1 = [1, 2, 3, 4, 5]

const redc = array1.reduce((previousValue, currentValue) => previousValue + currentValue, 0); // last 0 is sum = 0;

console.log(redc);

