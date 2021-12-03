const Engineer = require("../lib/Engineer");

class engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }


    getRole() {
        return Engineer
    }

    getGithub() {
        return this.github
    }

}