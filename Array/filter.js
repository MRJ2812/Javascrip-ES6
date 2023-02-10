// gives us the numbers that are match.

let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.filter((element) => {
    return element % 2 === 0;
});

console.log(newArray);



