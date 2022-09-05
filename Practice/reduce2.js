let array1 = [1, 9, 17, 22]

const people = [
    { name: 'Mena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchitra', age: 22 },
]

const redc = people.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0);

console.log(redc);