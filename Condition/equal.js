// when we compare , the value change internally ('false' change to 0)
// It's called type coercion. (Always say this).

// equal comparision not work in non-primitive type.


const integer = 2;
const string = '2';

if (integer == string) {
    console.log('== only check values')
}

if (integer === string) {
    console.log('=== check data type')
}