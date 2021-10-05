const Employee = require('../lib/employee.js');

describe("Initialization", () => {
    it("should create a new object with a name, id , email, and office number properties", () => {
        const obj = new Manager("Tyler", 1234, "tyler@email.com", 01);
        expect(obj).toEqual({
            name: "Tyler",
            id: 1234,
            email: "tyler@email.com",
            officeNum = 01
        }); 
    });
    describe("getRole", () => {
        it("should return the value of manager in place of employee", () => {
            const obj = new Manager("tyler", 1234, "tyler@email.com", 01);
            const getRole = obj.getRole("manager");
            expect(getRole).toEqual("manager");
        });
    });
});
