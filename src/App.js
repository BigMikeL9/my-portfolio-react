import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";

import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
