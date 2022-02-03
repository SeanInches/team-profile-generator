const employee = require('./employee')

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role = 'Engineer'
    }
}

module.exports = engineer;