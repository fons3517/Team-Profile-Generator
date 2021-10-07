const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        
    };
    getRole() {
        return "manager";

    };
    getOfficeNum(officeNum) {
        if(this.officeNum === officeNum){
            return officeNum;
        }
    }

};

module.exports = Manager;