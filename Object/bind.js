// same as call, apply function


const mother = {
    amount: 1000,

    motherfunction: function (cost) {
        const remaining = this.amount - cost
        console.log(remaining)
    }
}

const child = {
    amount: 2000
}

const callfunction = mother.motherfunction.bind(child)

callfunction(100)