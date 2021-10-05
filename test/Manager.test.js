const Manager = require('../lib/manager');

describe("Initialization", () => {
    it("should create a new object with a name, id , email, and office number properties", () => {
        const obj = new Manager("Tyler", 1234, "tyler@email.com", 101);
        expect(obj).toEqual({
            name: "Tyler",
            id: 1234,
            email: "tyler@email.com",
            officeNum: 101
        }); 
    });
    describe("getRole", () => {
        it("should return the value of manager in place of employee", () => {
            const obj = new Manager("tyler", 1234, "tyler@email.com", 101);
            const getRole = obj.getRole();
            expect(getRole).toEqual("manager");
        });
    });
});
//get Officenum