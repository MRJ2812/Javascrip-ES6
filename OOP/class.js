// Class first letter upperCase.
class Instractor {
    name = 'Messi';
    club = 'PSG';
    age = '36';

    display() {
        console.log(this.club);
    }
    goal(amount) {
        console.log(amount)
    }
}

const newclass = new Instractor();
newclass.display();
newclass.goal(10);