const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name, id, email, role, OfficeNumber) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        Manager.role = role;
        this.OfficeNumber = OfficeNumber;
    }


    getRole() {
        return "Manager";

    }

    getOfficeNumber() {
        return this.OfficeNumber
    }

}

module.exports = Manager;