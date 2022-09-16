// 'arguments' --> gives array like object
// we can convert it in array.

function arg(a, b, c) {
    const arr = [...arguments]              // change in array
    console.log(arr)

    for (i in arguments) {
        console.log(i)
    }
}

arg(10, 20, 30, 40, 50, 60)