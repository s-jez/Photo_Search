import { UNSPLASH_KEY, UNSPLASH_URL } from "../../config/urls";

export const getPhotos = async (url:string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};
export const getPhotosByQuery = async (query: string) => {
  try {
    const res = await fetch(`https://unsplash.com/nautocomplete/${query}`, {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    return null;
  }
};
export const getRandomPhoto = async () => {
  const res = await fetch(UNSPLASH_URL + "/photos/random" + UNSPLASH_KEY);
  return res.json();
};
