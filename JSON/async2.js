// In JavaScript, a callback function is a function that is passed as an argument to another function, and is executed after the first function has completed its task.

function simulateAsyncOperation(callback) {
    setTimeout(function () {
        callback("Data from a simulated asynchronous operation");
    },2000); // Simulate a 2-sec delay
}
console.log("Start of the program");
simulateAsyncOperation(function (data) {
    console.log("Data received:", data);
    console.log("End of the program");
});
console.log("Async operation in progress...");


/*
function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('John', sayGoodbye);


We define a greet function that takes two arguments: a name and a callback function.
Inside greet, we log a greeting message and then execute the callback function.
We define a sayGoodbye function that simply logs "Goodbye!".
Finally, we call greet with the name "John" and the sayGoodbye function as the callback.
*/
