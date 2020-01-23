const Employee = ("./employee");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getGithub() {
        return this.github;
    }

    getPosition() {
        return "Engineer";
    }
}

module.exports = Engineer;