const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name,
        this.id = id,
        this.email = email,
        this.githubName = githubName
    };
    getGithub(githubName) {
        if(githubName === this.githubName) {
            return this.githubName;
        }
    };
    getRole(engineer) {
        if(engineer === "engineer") {
            return "engineer";
        }
    };
}

module.exports = Engineer;