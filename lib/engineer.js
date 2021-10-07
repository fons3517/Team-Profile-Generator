const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.githubName = github
    };
    getGithub(githubName) {
        if(githubName === this.githubName) {
            return this.githubName;
        }
    };
    getRole() {
        return "engineer";
    };

}

module.exports = Engineer;