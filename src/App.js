import React, { useEffect, useCallback, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";

import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorksDetail/WorkDetail";

function App() {
  const location = useLocation();

  const [detailPageHeroInView, setDetailPageHeroInView] = useState(true);

  useEffect(() => {
    console.log("ADD Loading screen here");
  }, []);

  // -----------------------------------------------------------
  // Change navbar color when Hero Section in 'WorkDetail.js' page is not in view
  // Get 'inView' state from 'WorkDetail.js'  -->  then pass it down to 'Header.js'  ->  then to 'Navbar.js'

  const detailPageHeroExitViewHandler = useCallback((inView) => {
    setDetailPageHeroInView(inView);
  }, []);
  // -----------------------------------------------------------

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Header detailPageHeroInView={detailPageHeroInView} />

        <main aria-live="polite">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />

              <Route
                path="/works-detail/:workId"
                element={
                  <WorkDetail
                    onDetailPageHeroExitView={detailPageHeroExitViewHandler}
                  />
                }
              />

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
