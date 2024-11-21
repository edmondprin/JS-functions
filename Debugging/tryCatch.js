const obj = undefined;
try {
    const propertyValue = obj.property; // Attempt  to access a property of unddefined object
    console.log("Property Value: " + propertyValue);
    console.log("This message will be reached.");
} catch (error) {
    console.log("An error occurred while accessing the property:", error.message);
}
console.log("Program continues after error handling.");

const arr = [1, 2, 3];
try {
    const element = arr[5]; // Attempt to access an out-of-bounds array element
    console.log("Array element:" + element);
    console.log("This message will be reached");
} catch (error) {
    console.log("An error occurred while accesing the array element:", error.message);
}
console.log("Program continues after error handling");