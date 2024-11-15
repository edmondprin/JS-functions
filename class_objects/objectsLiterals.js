// Create objects without class
// suitable for ad hoc objects (eg storing individual customer orders)

const person = {
    firstName: "Alice",
    lastName: "Johnson",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());

