const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.officenumber = officenumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
