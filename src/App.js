import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  return (
    <div className="App">
      <h1>Unsplash</h1>
      <p>
        The internet's source of <a href="/">freely-usable images</a>
      </p>
      <p>Powered by creators everywhere.</p>
      {useFetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`
      )}
    </div>
  );
}

export default App;
