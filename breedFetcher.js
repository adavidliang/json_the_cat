const request = require('request');



const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // console.log(breedName);
    //Request Failed;
    if (error) {
      callback(error, null);
      return;
    }
  
    //Breed Not Found;
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(data[0]);
    if (data[0] === undefined) {
      return (callback("Breed Not Found", null));
    } else {
      return callback(null, data[0].description);
    }

  
  });
};

module.exports = { fetchBreedDescription };

