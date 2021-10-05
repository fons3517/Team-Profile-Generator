const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id , email);
        this.school = school;
    
    };

    getSchool(school) {
        if(school === this.school) {
            return this.school;
        }

    };

    getRole(intern) {
        if(intern === "intern") {
            return "intern";
        }
    };
};

module.exports = Intern;
