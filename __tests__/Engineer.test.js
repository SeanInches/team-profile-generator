const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer Class", () => {
  it("should allow you to create engineer", () => {
    const newObject = new Engineer();

    expect(typeof newObject).toBe("object");
  });

  it("should allow user to add a name", () => {
    const newName = "Test name";
    const newObject = new Engineer(
      newName,
      "Test Id",
      "Test email",
      "github.com/test"
    );

    expect(newObject.name).toBe(newName);
  });

  it("should allow user to add an id", () => {
    const newId = "Test Id";
    const newObject = new Engineer(
      "Test name",
      newId,
      "Test email",
      "github.com/test"
    );

    expect(newObject.id).toBe(newId);
  });

  it("should allow user to add a email", () => {
    const newEmail = "Test email";
    const newObject = new Engineer(
      "Test name",
      "Test Id",
      newEmail,
      "github.com/test"
    );

    expect(newObject.email).toBe(newEmail);
  });

  it("should allow user to add a github", () => {
    const newGithub = "github.com/test";
    const newObject = new Engineer(
      "Test name",
      "Test Id",
      "Test email",
      newGithub
    );

    expect(newObject.github).toBe(newGithub);
  });
});
