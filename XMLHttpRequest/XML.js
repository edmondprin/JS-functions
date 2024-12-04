// JS for AJAX functionality
document.getElementById('loadUsersBtn').addEventListener ('click', function() {
    // Creating new XMLHttpRequest Object
    var xhr = new XMLHttpRequest();
    // Define the request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/', true);
    // Handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var users = JSON.parse(xhr.responseText);
            displayUsers(users);
        } else {
            console.error('Error fetching data');
        }
    };

    // Handle network errors
    xhr.onerror = function() {
        console.error("Network error");
    };

    // Send the request 
    xhr.send();
});


// Function to display users on the page
function displayUsers(users) {
    var userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '<h2>User List</h2>';
    var ul = document.createElement('ul');
    
    users.forEach(function(user) {
        var li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
    });
    userListDiv.appendChild(ul);
}