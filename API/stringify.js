const mobile = {
    name: "Samsung",
    model: "A51",
    price: "25000"
}

console.log(mobile)

const mobileJSON = JSON.stringify(mobile);
console.log(mobileJSON)

const mobileParse = JSON.parse(mobileJSON);   // parse only JSON file.
console.log(mobileParse)