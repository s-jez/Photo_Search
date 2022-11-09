import { UNSPLASH_KEY, UNSPLASH_URL, UNSPLASH_API_URL } from "../../config/urls";

export const getPhotos = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};

export const getPhotosByQuery = async (query: string) => {
  try {
    // ten url też można jako zmienną typu UNSPLASH_URL='https://unsplash.com' UNSPLASH_API_URL='https://api.unsplash.com'
    const res = await fetch(`${UNSPLASH_URL}/nautocomplete/${query}`, {
      method: "GET"
    });
    return res.json();
  } catch (error) {
    return null;
  }
};

export const getRandomPhoto = async () => {
  const res = await fetch(UNSPLASH_API_URL + "/photos/random" + UNSPLASH_KEY);
  return res.json();
};
