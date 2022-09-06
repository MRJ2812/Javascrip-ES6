const mobile = {
    name: "Samsung",
    model: "A51",
    price: "25000"
}


console.log(Object.entries(mobile))    // this gives [ [keys,value],[],[] ]

for ([key, value] of Object.entries(mobile)) {
    console.log(key, value)
}


