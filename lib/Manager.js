const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name, id, email, role, office) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        Manager.role = role;
        this.office = office;
    }


    getRole() {
        return "Manager";

    }

    getOffice() {
        return this.office
    }

}

module.exports = Manager;