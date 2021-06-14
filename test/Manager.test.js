const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Create", () => {
    it("Should create a add Manager role and github username", () => {
      const result = new Manager.Manager(
        "Bill Murray",
        "01",
        "thuglife@deathrow.com",
        "60612",
        "Manager"
      );

      expect(result).toEqual({
        employeeName: "Bill Murray",
        id: "01",
        email: "thuglife@deathrow.com",
        number: "60612",
        role: "Manager",
      });
    });
  });
});
