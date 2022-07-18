import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";

import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("ADD Loading screen here");
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Header />

        <main>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              <Route path="/works-detail/:workId" element={<WorkDetail />} />

              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
