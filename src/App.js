import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "./data/ThemeData";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
