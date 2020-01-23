const Employee = ("./employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(id, name, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getPosition() {
        return "Engineer";
    }
}

module.exports = Engineer;