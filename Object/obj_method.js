const student = {
    name: 'joy',
    id: '193-16-463',
    course: 'cis'

}

const newObj = Object.create(student)          // this is just a object chain

console.log(newObj)                           //  this is empty
console.log(newObj.name)                      //   but this will get value
console.log(newObj.roll)                      //  this is undefined