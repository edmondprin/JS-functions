/*
axios({
  method: 'HTTP_METHOD',
  url: 'URL',
  headers: {
   // Headers (optional)
  },
  data: {
   // Request data (optional)
  }
 })

 .then(response => {
   // Handle the successful response
 })
 .catch(error => {
   // Handle errors
 });
*/

const axios = require('axios');
// Required to use in a node.js environment, but not browser type environment (script would suffice)
const apiURL = 'https://jsonplaceholdertypicodecom/posts/1';

 axios({
  method: 'GET',
  url: apiURL
 })

 .then(response => {
   console.log('Data from the API:', response.data);
 })
 .catch(error => {
   console.error('An error occured:', error);
 });