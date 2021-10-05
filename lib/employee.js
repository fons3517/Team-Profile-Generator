class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    };
    getName(name) {
        if(name === this.name) {
            return this.name;
        }
    };
    getId(id) {
        if(id === this.id) {
            return this.id;
        }
    };
    getEmail(email) {
        if(email === this.email) {
            return this.email;
        }
    };
    getRole(employee) {
        if(employee === "employee") {
            return "employee";
        }

    };
};

module.exports = Employee;