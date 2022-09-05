class TeamMember {
    name;
    id;
    constructor(name, id) {
        this.memberName = name;
        this.memberId = id;
    }
}

class Tester extends TeamMember {
    constructor(name, id) {
        super(name, id);
    }
}

class Developer extends TeamMember {
    constructor(name, id) {
        super(name, id);
    }

    display(name) {
        console.log(name);
    }
}

const setData = new Developer('zara', '69');
setData.display()