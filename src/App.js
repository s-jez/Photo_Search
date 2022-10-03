import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="App__card">
        <h1>Unsplash</h1>
        <p>
          The internet's source of{" "}
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            freely-usable images
          </a>
        </p>
        <p>Powered by creators everywhere.</p>
        <Form />
      </div>
    </div>
  );
}

export default App;
