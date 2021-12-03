const Employee = require("../lib/Employee");

class Intern extends Employee {

    constructor(name, id, email, role, School) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        Intern.role = role;
        this.School = School;
    }


    getRole() {
        return "Intern";

    }

    getSchool() {
        return this.School;
    }

}

module.exports = Intern;