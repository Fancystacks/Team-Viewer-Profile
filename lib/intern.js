const Employee = ("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(id, name, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Intern";
    }
}

module.exports = Intern;