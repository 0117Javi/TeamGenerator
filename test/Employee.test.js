const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Create", () => {
    it("Should create a new Employee", () => {
      const result = new Employee("Bill Murray", "01", "thuglife@deathrow.com");

      expect(result).toEqual({
        employeeName: "Bill Murray",
        id: "01",
        email: "thuglife@deathrow.com",
      });
    });
  });
});
