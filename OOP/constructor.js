class student {

    constructor(name, roll) {                   // No need to inithialize variable.
        this.StudentName = name;
        this.StudentRoll = roll;
    }

    display() {
        console.log(this.StudentName)
    }
}

const nameset = new student('joy', '463');
nameset.display();

