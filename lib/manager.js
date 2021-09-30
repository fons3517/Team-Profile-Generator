const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    getRole() {

    };

};

module.exports = Manager;