// Function to fetch and work with JSON data
function fetchBooks() {
    // Fetch the JSON data from the file
    fetch('books.json')
    .then(response => response.json())
    .then(data => {
        // Data contains the JSON content 
        console.log('List of Books:');
        data.forEach(book => {
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author}`);
            console.log(`Publication Year: ${book.publicationYear}`);
            console.log('-----------------------------');
        });
        // You can perform other operations with the JSON data here
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
}

// Call the function to fetch and work with JSON data
fetchBooks();

//JSON.parse()