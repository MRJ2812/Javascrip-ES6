// same as call function. jsut give 
const mother = {
    amount: 1000,

    motherfunction: function (cost, tax) {
        const remaining = this.amount - cost - tax
        console.log(remaining)
    }
}

const child = {
    amount: 2000
}

const callfunction = mother.motherfunction.apply(child, [500, 500])

// const callfunction = mother.motherfunction.call(child,500,500)    // this is call function.