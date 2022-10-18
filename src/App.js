import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContent />
    </Fragment>
  );
}

export default App;
