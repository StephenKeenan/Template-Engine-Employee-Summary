// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("../develop/lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        this.getRole = function() {
            this.role = "Manager";
            return this.role;
        }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;