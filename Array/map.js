let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.map(function (element) {
    return element * 5;
});

// let newArray = oldArray.map(element=> element * 5);

console.log(newArray);