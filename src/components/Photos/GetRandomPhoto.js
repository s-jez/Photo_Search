let UNSPLASH_URL = `https://api.unsplash.com`;
let UNSPLASH_KEY = `?client_id=${process.env.REACT_APP_API_KEY}`;


const GetRandomPhoto = () => {
    fetch(UNSPLASH_URL+"/photos/random" + UNSPLASH_KEY)
    .then(response => response.json())
    .then(data => console.log(data))
}
export default GetRandomPhoto;