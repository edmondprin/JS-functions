npm install axios

// Axios is a popular JavaScript library used to make HTTP requests from the browser. It provides a simple and consistent API for making asynchronous HTTP requests to interact with RESTful APIs or other web services. 


// You can perform various HTTP methods (GET, POST, PUT, DELETE, etc.) using Axios by calling axios.<method> (e.g., axios.post, axios.put, axios.delete) and handling their respective responses and errors with .then and .catch blocks.

// Import Axios

const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });


// This async/await example achieves the same result as the previous example but using a more synchronous-looking code structure.

  async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();


// Fetch vs Axios (both JS libraries)
// Fetch is built-in API in modern browsers, not Axios
// Axios in an intuitive, high-level API (easier to handle requests, responses and errors)
