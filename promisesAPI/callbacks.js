/*
What is a callback?

Passed as an argument to another function
Delayed execution
Used to handle asynchronous operations
Examples: Event handlers, timers, user interactions.

Access and display user info, recent posts from an API
*/

const { userInfo } = require("os");

// Simulated API requests with callbacks

function getUserInfo(userID, callback) {
    setTimeout(() => {
        const userInfo = { name: 'John', email: 'John@example.com' };
        callback(userInfo);
    }, 1000);
}

function getUserPosts(userID, callback) {
    setTimeout(() => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        callback(posts);
    }, 1500);
}

// Callback hell scenario
getUserInfo(1, (userInfo) => {
    console.log('User Info:', userInfo);

    getUserPosts(1, (userPosts) => {
        console.log('User Posts:', userPosts);

        // 1 here is the userID
        // Display user info and posts on the page
        // This is where you would typically update the UI
    });
});