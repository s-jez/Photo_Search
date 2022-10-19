import { UNSPLASH_KEY, UNSPLASH_URL } from "../../utils/urls";

let randomPhoto;
const getRandomPhoto = () => {
  fetch(UNSPLASH_URL + "/photos/random" + UNSPLASH_KEY)
    .then((response) => response.json())
    .then((data) => {
      randomPhoto = data.urls.full;
    });
  return randomPhoto === undefined
    ? "https://i.imgur.com/O0eAkcG.jpg"
    : randomPhoto;
};
export default getRandomPhoto;
