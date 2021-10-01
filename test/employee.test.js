const Employee = require('../lib/employee.js');

describe("Initialization", () => {
    it("should create an object with name, id, and email properties", () => {
        const obj = new Employee("Tom", 2345, "email@email.com");
        expect(obj).toEqual({
            name: "Tom",
            id: 2345,
            email: "email@email.com"
        });
    });
    describe("getName", () => {
        it("should get name from Employee object method getName()", () => {
        const obj =  new Employee("Tom", 2345, "email@email.com");
        const getName = obj.getName("Tom")
        expect(getName).toEqual(obj.name);
        });
    });
    describe("not getName", () => {
        it("should return getName undefined", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getName = obj.getName("Fred");
            expect(getName).not.toEqual(obj.name);
        });
    });
    describe("getId", () => {
        it("should grab id value from id property inside object", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getId = obj.getId(2345);
            expect(getId).toEqual(obj.id);            
        });
    });
    describe("getId undefined", () => {
        it("should return getId undefined", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getId = obj.getId(1234);
            expect(getId).not.toEqual(obj.id);
        });
    });
    describe("getEmail", () => {
        it("should return email value from email property", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getEmail = obj.getEmail("email@email.com");
            expect(getEmail).toEqual(obj.email);
        });
    });
    describe("getEmail undefined", () => {
        it("should have getEmail return undefined", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getEmail = obj.getEmail("fons@email.com");
            expect(getEmail).not.toEqual(obj.email)
        });
    });
    describe("getRole", () => {
        it("should return the employee value as a string", () => {
            const obj = new Employee("Tom", 2345, "email@email.com");
            const getRole = obj.getRole("employee");
            expect(getRole).toEqual("employee");
        });
    });
});


