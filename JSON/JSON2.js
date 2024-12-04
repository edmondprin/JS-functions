// Define a JSON object representing information about a person
const personJSON = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "tags": ["JavaScript", "Node.js", "Web Development"],
    "isStudent": false,
    "workExperience": null
  };
  
  // Convert the JSON object to a string
  const jsonString = JSON.stringify(personJSON);
  
  console.log(jsonString);



  // JSON structure represented as a string
const jsonString2 = '{"name": "John Doe", "age": 30, "isStudent": true}';
// JavaScript object
const personObject = {
  name: "Jane Smith",
  age: 25,
  isStudent: false
};

// Parsing JSON string to JavaScript object
const parsedJSON = JSON.parse(jsonString2);
console.log(parsedJSON); // Output: { name: 'John Doe', age: 30, isStudent: true }
console.log(typeof parsedJSON); // Output: object
// Directly Using JavaScript Object:
console.log(personObject); // Output: { name: 'Jane Smith', age: 25, isStudent: false }
console.log(typeof personObject); // Output: object