export const UNSPLASH_URL = "https://unsplash.com";
export const UNSPLASH_API_URL = `https://api.unsplash.com`;
export const UNSPLASH_KEY = `?client_id=${process.env.REACT_APP_API_KEY}`;
export const SEARCH_PHOTOS_URL = UNSPLASH_API_URL + "/search/photos/" + UNSPLASH_KEY + "&query=";
