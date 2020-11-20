// Defines and exports the Employee class

class Employee {
    constructor (name, id, email, phone) {
        this.name = name; 
        this.id = id;
        this.email = email;
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