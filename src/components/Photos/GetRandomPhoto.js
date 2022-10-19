let UNSPLASH_URL = `https://api.unsplash.com`;
let UNSPLASH_KEY = `?client_id=${process.env.REACT_APP_API_KEY}`;

let randomPhoto;
const getRandomPhoto = () => {
  fetch(UNSPLASH_URL + "/photos/random" + UNSPLASH_KEY)
    .then((response) => response.json())
    .then((data) => {
      randomPhoto = data.urls.full;
    });
  console.log(randomPhoto);
  if (randomPhoto === undefined) {
    return "https://i.imgur.com/O0eAkcG.jpg";
  } else {
    return randomPhoto;
  }
};
export default getRandomPhoto;
