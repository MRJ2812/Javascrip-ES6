// entries --> return values as [ [], [] , [] ]
// delete --> can delte any object key,value
// seal --> after seal can not delete or push any value, but can update key value.
// freeze  --> cannot update,delete,push any value.

const mobile = {
    name: "Samsung",
    model: "A51",
    price: "25000"
}

console.log(Object.entries(mobile))

// delete function
delete mobile.model

console.log(mobile)

// seal function
Object.seal(mobile)

delete mobile.price

console.log(mobile)