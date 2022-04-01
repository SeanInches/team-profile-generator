const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager Class", () => {
  it("should allow you to add new manager", () => {
    const newObject = new Manager();

    expect(typeof newObject).toBe("object");
  });

  it("should allow user to add a name to manager", () => {
    const newName = "Test name";
    const newObject = new Manager(newName, "Test Id", "Test email", 987654321);

    expect(newObject.name).toBe(newName);
  });

  it("should allow user to add an id to manager", () => {
    const newId = "Test Id";
    const newObject = new Manager("Test name", newId, "Test email", 987654321);

    expect(newObject.id).toBe(newId);
  });

  it("should allow user to add a email to manager", () => {
    const newEmail = "Test email";
    const newObject = new Manager("Test name", "Test Id", newEmail, 987654321);

    expect(newObject.email).toBe(newEmail);
  });

  it("should allow user to add officenumber to manager", () => {
    const newPhone = 987654321;
    const newObject = new Manager(
      "Test name",
      "Test Id",
      "Test email",
      newPhone
    );

    expect(newObject.officenumber).toBe(newPhone);
  });
});
