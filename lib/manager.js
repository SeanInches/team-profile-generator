const employee = require('./employee')

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role = 'Manager'
    }

    getOfficenumber() {
        return this.officeNumber
    }
}

module.exports = manager;