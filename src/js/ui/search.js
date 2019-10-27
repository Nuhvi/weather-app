import citiesList from './cities.js';

const Suggestions = require('suggestions');

const Search = (() => {
  const capitalize = (name) => name[0].toUpperCase() + name.slice(1);

  const isValidCityName = (name) => citiesList.includes(capitalize(name));

  const input = document.querySelector('input');

  // eslint-disable-next-line no-new
  new Suggestions(input, citiesList, {
    minLength: 1,
    limit: 1,
  });

  return {
    isValidCityName,
  };
})();

export default Search;
