// Defines and exports the Intern class, inheriting from Employee.

const Employee = require("./develop/lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.school = school;

        this.getRole = function() {
            this.role = "Intern";
            return this.role;
        }
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;