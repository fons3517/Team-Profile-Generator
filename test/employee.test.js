const Employee = require('../lib/employee.js');

describe("Initialization", () => {
    it("should create an object with name, id, and email properties", () => {
        // Arrange
        const obj = new Employee("Tom", 2345, "email@email.com");

        expect(obj).toEqual({name: "Tom", id: 2345, email: "email@email.com"});
        
    })

});
