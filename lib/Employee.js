// Defines and exports the Employee class

class Employee {
    constructor (name, id, email, phone) {
        this.name = name; 
        this.id = id;
        this.email = email;

        this.getRole = function() {
            this.role = "Employee";
            return this.role;
        }
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee