// find even length string.
const checkLength = (array) => {
    for (element of array) {

        if (element.length % 2 == 0) {
            console.log(element);
        }
    }
}
array1 = ['dabi', 'gautaro', 'akaza', 'kazotora'];

checkLength(array1)

