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

mother.motherfunction(500)                       // this will go in mother function.

const callfunction = mother.motherfunction.call(child, 500)    // 500 as perameter.