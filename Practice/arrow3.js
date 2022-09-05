// squre the array elemnt and then find average.
const checkLength = (array) => {
    sum = 0
    for (element of array) {
        sum = sum + Math.pow(element, array.length);
    }
    sum = sum / array.length
    console.log(sum)
}

array1 = [10, 20];
checkLength(array1)


