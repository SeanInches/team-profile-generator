const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("should create new employee", () => {
    const newObject = new Employee();

    expect(typeof newObject).toBe("object");
  });

  it("should allow you to add a name to employee", () => {
    const newName = "Test Name";
    const newObject = new Employee(newName);

    expect(newObject.name).toBe(newName);
  });

  it("should allow you to add an id to employee", () => {
    const newId = 1;
    const newObject = new Employee("Test Name", newId);

    expect(newObject.id).toBe(newId);
  });

  it("should allow you to add an email to employee", () => {
    const newEmail = "testemail@email.com";
    const newObject = new Employee("Test Name", 2, newEmail);

    expect(newObject.email).toBe(newEmail);
  });
});
