const employee = require("./employee");

class manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getRole() {
    this.role = "manager";
    return this.role;
  }

  getOfficenumber() {
    return this.officeNumber;
  }
}

module.exports = manager;
