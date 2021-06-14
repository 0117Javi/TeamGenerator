const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Create", () => {
    it("Should create a add Engineer role and github username", () => {
      const result = new Engineer.Engineer(
        "Bill Murray",
        "01",
        "thuglife@deathrow.com",
        "RealMurrayTech",
        "Engineer"
      );

      expect(result).toEqual({
        employeeName: "Bill Murray",
        id: "01",
        email: "thuglife@deathrow.com",
        githubRepo: "RealMurrayTech",
        role: "Engineer",
      });
    });
  });
});
