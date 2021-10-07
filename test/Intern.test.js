const Intern = require('../lib/intern.js');

describe("Initialization", () => {
    it("should create a new Intern object with Employee classes attatched to it along with a school prop. and getSchool() method", () => {
        const obj = new Intern("Breanna", 2875 , "breanna@email.com", "UTSA");
        expect(obj).toEqual({
            name: "Breanna",
            id: 2875,
            email: "breanna@email.com",
            school: "UTSA"
        });
    });
    describe("getSchool", () => {
        it("should return the school property value from the Intern object", () => {
            const obj = new Intern("Breanna", 2875, "breanna@email.com", "UTSA");
            const getSchool = obj.getSchool("UTSA");
            expect(getSchool).toEqual(obj.school);
        });
    });
    describe("getRole", () => {
        it("should return the role for the new Intern object", () => {
            const obj = new Intern("Breanna", 2875, "breanna@email.com", "UTSA");
            const getRole = obj.getRole("Intern");
            expect(getRole).toEqual("Intern")
        });
    });
});