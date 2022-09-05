const Student = {
    name: "joy",
    id: '193-16-463',
    course: 'js',
    objFunction: function () {               // this is a function
        console.log(this.name)
    }
}


console.log(student.objFunction())