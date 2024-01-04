// Import the axios library
const axios = require('axios');

// URL of the GET request
const url = 'http://[::]:3000/';

// Make a GET request using axios
axios.get(url)
  .then(response => {
    // Handle the response data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.message);
  });