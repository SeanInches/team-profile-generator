const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern Class", () => {
  it("should allow you to add an engineer", () => {
    const newObject = new Intern();

    expect(typeof newObject).toBe("object");
  });

  it("should allow user to add a name", () => {
    const newName = "Test name";
    const newObject = new Intern(
      newName,
      "Test Id",
      "Test email",
      "github.com/test"
    );

    expect(newObject.name).toBe(newName);
  });

  it("should allow user to add an id", () => {
    const newId = "Test Id";
    const newObject = new Intern(
      "Test name",
      newId,
      "Test email",
      "github.com/test"
    );

    expect(newObject.id).toBe(newId);
  });

  it("should allow user to add a email", () => {
    const newEmail = "Test email";
    const newObject = new Intern(
      "Test name",
      "Test Id",
      newEmail,
      "github.com/test"
    );

    expect(newObject.email).toBe(newEmail);
  });

  it("should allow user to add a School", () => {
    const newSchool = "Test school";
    const newObject = new Intern(
      "Test name",
      "Test Id",
      "Test email",
      newSchool
    );

    expect(newObject.school).toBe(newSchool);
  });
});
