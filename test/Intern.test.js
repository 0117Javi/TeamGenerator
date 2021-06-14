const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Create", () => {
    it("Should create a add Intern role and github username", () => {
      const result = new Intern.Intern(
        "Bill Murray",
        "01",
        "thuglife@deathrow.com",
        "App State",
        "Intern"
      );

      expect(result).toEqual({
        employeeName: "Bill Murray",
        id: "01",
        email: "thuglife@deathrow.com",
        school: "App State",
        role: "Intern",
      });
    });
  });
});
