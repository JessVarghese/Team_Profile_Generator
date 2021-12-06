const Employee = require("../lib/Employee");

class Intern extends Employee {

    constructor(name, id, email, role, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        Intern.role = role;
        this.school = school;
    }


    getRole() {
        return "Intern";

    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;