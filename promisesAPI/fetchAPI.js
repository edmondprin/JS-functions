/*

fetch(url, options)
  .then(response => {
    // Handle the response
    })
  .catch (error => {
    // Handle any errors that occured during the fetch
});

methods: GET POST PUT DELETE

GET method to retrieve data from a specified source, does not modify data from the server

fetch('https://api.example.com/data', {
  method: 'GET'
})

POST method to submit data to a specified source, or create new records

fetch('https://api.example.com/create', {
  method: 'POST',
  body: JSON.stringify({name: 'John', email: 'john@example.com' }),
  headers: { 'Content-Type': 'application/json' }
})

PUT method to update or replace data, update existing records

fetch('https://example.com/update/1', {
  method: 'PUT',
  body: JSON.stringify({name: 'Updated name', email: 'updated@example.com' }),
  headers: { 'Content-Type': 'application/json' }
  })

DELETE method remove resources from the server, delete records  

fetch('https://example.com/delete', {
  method: 'DELETE'
  })

PATCH method to apply partial modification

fetch('https://example.com/update', {
  method: 'PATCH',
  body: JSON.stringify({ email: 'updated@example.com' }),
  headers: { 'Content-Type': 'application/json' }
  })

OPTIONS method to describe communication options, check allowed methods and headers
fetch('https://api.example.com/resource', {
  method: 'OPTIONS'
  })

*/


const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiURL)
  .then(Response => {
    return response.json(); // Parse the response as json
  })
  .then(data => {
    // Handle and use the json data
    console.log('Data from the API:', data);
  }) 
  .catch(error => {
    // Handle errors that occured during the fetch
    console.error('An error occured:', error);
  });