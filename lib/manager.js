const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
    super(id, name, email)
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getPosition() {
        return "Manager";
    }
}

module.exports = Manager;