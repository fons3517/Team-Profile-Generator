const Employee = require('../lib/employee.js');

describe("Initialization", () => {
    it("should create a new object with a name, id, email, and github username properties", () => {
        const obj = new Engineer("Warren", 9876, "warren@email.com", "WarrenGBeatty");
        expect(obj).toEqual({
            name: "Warren",
            id: 9876,
            email: "warren@email.com",
            githubName: "WarrenGBeatty"
        });
    });
});
