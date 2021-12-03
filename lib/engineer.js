const Employee = require("../lib/Employee");

class Engineer extends Employee {

    constructor(name, id, email, role, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        Engineer.role = role;
        this.github = github;
    }


    getRole() {
        return "Engineer";

    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer;