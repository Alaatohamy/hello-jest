const fetch = require("node-fetch");

const getPeoplePromise = fetch => {
  return fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(res => ({
      count: res.count,
      results: res.results
    }));
};

const getPeople = async fetch => {
  const response = await fetch("https://swapi.co/api/people");
  const jsonResponse = await response.json();
  return {
    count: jsonResponse.count
    // results: jsonResponse.results
  };
};

getPeoplePromise(fetch);
getPeople(fetch);

module.exports = { getPeoplePromise, getPeople };
