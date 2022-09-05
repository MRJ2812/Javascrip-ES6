const array = [10, 22, 30, 46, 50]

const newArray = array.filter(x => x % 10 == 0);
const newArray1 = array.find(x => x % 10 == 0);

console.log(newArray);
console.log(newArray1);