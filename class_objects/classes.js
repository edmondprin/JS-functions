class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating an instance of the Person Class
const person1 = new Person("John", "Prin");
console.log(person1.getFullName());
console.log(person1);


class Car {
    contructor(make, model, trim, year) {
        this.make = make;
        this.model = model;
        this.trim = trim;
        this.year = year;
    }

    startEngine() {
        console.log(`The ${this.make} ${this.model} ${this.trim}'s engine is running.`);
    }
}

const myChev = new Car("Chevrolet", 'Silverado', '1500 WT', 2024);
myChev.startEngine();
console.log(myChev.model);