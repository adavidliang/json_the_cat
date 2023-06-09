const request = require('request');

const read = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${read}`;
request(url, (error, response, body) => {
  // Request Failed;
  if (error) {
    console.log('request error', error);
    return;
  }

  // Breed Not Found;
  const data = JSON.parse(body);
  data[0] === undefined
    ? console.log("Breed Not Found")
    : console.log(data[0].description);

});


