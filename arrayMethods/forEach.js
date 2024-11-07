/*
ForEach:
- Iterates through arrayExpression
- Applies the provided function to each element
- Useful for performing specific actions
- Does not create a new array
*/

function sendWelcomeEmail(email) {
    console.log(`Welcome email sent to ${email}`);
}
const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
];

users.forEach((user) => {
    sendWelcomeEmail(user.email);
})

users.forEach((user) => console.log(user.name));