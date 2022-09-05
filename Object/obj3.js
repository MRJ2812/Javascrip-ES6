const Student = {
    name: "joy",
    id: '193-16-463',
    course: 'js',
    NameDisplay: function () {
        console.log(this.name)
    },

    callNameFunction: function () {          // call inner function
        this.NameDisplay()
    }
}
Student.callNameFunction()
