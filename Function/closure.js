// This is instance like java
// we make 2 difference instance for this function, (run this)

function closure() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}

const closure1 = closure();
closure1()
closure1()
closure1()


const closure2 = closure();
closure2();
closure2();