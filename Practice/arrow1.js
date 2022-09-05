const afunction = (num1, num2, num3) => num1 * num2 * num3;

console.log(afunction(10, 10, 10));

///////// another

const afunction2 = (num1, num2, num3 = 0) => num1 * num2 * num3;

console.log(afunction(10, 10));