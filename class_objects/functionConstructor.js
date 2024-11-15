// Used to create and initialize objects
// Named with capital letter
// Ideal for creating multiple instances with shared properties and methods

function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car1 = new Car ("Honda", "CR-V");
const car2 = new Car ("Chevrolet", "Silverado");

console.log('Car 1 details are ', car1);
console.log('Car 2 details are ', car2);