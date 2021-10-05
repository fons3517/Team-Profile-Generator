const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        
    };
    getRole(manager) {
        if(manager === "manager") {
            return "manager";
        }
    };

};

module.exports = Manager;