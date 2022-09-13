const mother = {
    name: 'joy',

    motherfunction: function () {                 // normal function
        console.log(this.name)                    // it should print "joy"
    }
}

const child = {
    name: 'MR'
}


const callfunction = mother.motherfunction.call(child)    // THis means the function "motherfunction" work for "child" object not for "mother" object anymore.

callfunction  // call the function.