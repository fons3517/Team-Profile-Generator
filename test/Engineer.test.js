const Engineer = require('../lib/engineer');

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
    describe("getGithub", () => {
        it("should return githubName property value from Engineer object", () => {
            const obj = new Engineer("Warren", 9876, "warren@email.com", "WarrenGBeatty");
            const getGithub = obj.getGithub("WarrenGBeatty");
            expect(getGithub).toEqual(obj.githubName);
        });
    });
    describe("getRole", () => {
        it("should return the role Engineer from the object", () => {
            const obj = new Engineer("Warren", 9876, "warren@email.com", "WarrenGBeatty");
            const getRole = obj.getRole("Engineer")
        });
    });
});
