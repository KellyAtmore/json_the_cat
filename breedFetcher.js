const request = require('request');


const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  console.log(JSON.parse(body));
});




// console.log(body);
// const data = JSON.parse(body);

