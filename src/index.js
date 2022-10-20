import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import GalleryContent from "./pages/GalleryContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
// tutaj najlepiej wyrenderować samo App i to wszystko umieścić w APP wraz z GlobalStyles i wtedy w route dać    <MainContent />
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/photos" element={<GalleryContent />} />
    </Routes>
  </BrowserRouter>
);
