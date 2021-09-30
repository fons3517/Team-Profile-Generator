const Employee = require('./employee.js');
const obj = new Employee("Tom", 2345, "email@email.com");
console.log(obj.getId(obj.id));