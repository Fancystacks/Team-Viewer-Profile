const Employee = require("./employee");

class Engineer extends Employee{
    constructor(id, name, email, github) {
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