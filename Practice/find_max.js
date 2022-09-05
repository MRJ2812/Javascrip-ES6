const checkLength = (array1, array2) => {
    let newa = [...array1, ...array2];

    console.log(Math.max(...newa));
}

array1 = [10, 20];
array2 = [30, 40];

checkLength(array1, array2);