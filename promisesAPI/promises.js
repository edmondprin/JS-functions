/*
What are promises in JS?

A powerful and flexible approach
Represents future values

Used to:
- Fetching data
- Reading files
- Performing operations

States:
- Pending: initial state when creating the promise
- Fulfilled: Asynchronous operation is completed and result is available
- Rejected: Unsuccessful asynchronous operation or an error is encountered

*/

// Created using a Promise constructor

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation goes here
    // If successful, call resolve with the result
    // If an error occurs, call reject with an error
});

// Promise consumption

myPromise.then(
    (result) => {
        // Handle the successful result with callback function
    },
    (error) => {
        // Handle the error with callback function
    }
); 

// Simulated API requests with pronmises

function getUserInfo(userID) {
    return new Promise(userID) {
        setTimeout(() => {
            const userInfo = { name: 'John', email: 'john@example.com' };
            resolve(userInfo);
        }, 1000);
    };
}

function getUserPosts(userID) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const posts = { 'post 1', 'post 2', 'post 3' };
            resolve(posts);
        }, 1500);
    });
}

// Using promises to simplify the code

getInfo(1)
    .then((userInfo) => {
        console.log('User info:', userInfo);
        return getUserPosts(1);
    })
    .then((userPosts) => {
        console.log('User Posts:', userPosts);
    }) 
    .catch((error) > {
        console.error('An error occured:', error);
    });