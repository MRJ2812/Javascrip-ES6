const employee = {
    name: 'joy',
    designation: 'web_developer',
    language: ['python', 'java', 'javascript', 'c'],
    specificaiton: {
        height: 5.10,
        weight: 70,
        address: 'Brahmonbaria'

    }
}

const { name, language } = employee
console.log(language)

const { address } = employee.specificaiton
console.log(address)


const [x, y] = employee.language
console.log(x)