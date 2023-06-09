const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');
console.log(breedName);
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Errer fetch details:', error);
  } else {
    console.log(desc);
  }
});


module.exports = { breedName };