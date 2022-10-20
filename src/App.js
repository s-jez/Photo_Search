import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryContent from "./pages/GalleryContent";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/photos" element={<GalleryContent />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
