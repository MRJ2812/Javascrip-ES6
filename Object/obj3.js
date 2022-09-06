const Student = {
    name: "joy",

    NameDisplay: function () {
        console.log(this.name)
    },

    callNameFunction: function () {          // call inner function
        this.NameDisplay()
    }
}

Student.callNameFunction()
