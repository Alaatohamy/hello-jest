const googleData = [
  "dogs.com",
  "dogsPictures.com",
  "pizza.com",
  "hotdog.com",
  "dogTypes.com",
  "flowers.com"
];

const searchGoogleData = (db, searchInput) => {
  const matches = db.filter(website => website.includes(searchInput));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

searchGoogleData(googleData, "dog");

module.exports = searchGoogleData;
