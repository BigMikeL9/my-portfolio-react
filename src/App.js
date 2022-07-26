import React, { useEffect, useCallback, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";

import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import WorkDetail from "./pages/WorksDetail/WorkDetail";

function App() {
  const location = useLocation();

  const { pathname } = location;

  // -- If detail page is mounted && Detail page hero section is not inView  -->  Change nav color
  const [detailPageMounted, setDetailPageMounted] = useState();
  const [detailPageHeroInView, setDetailPageHeroInView] = useState();

  useEffect(() => {
    console.log("ADD Loading screen here");

    // -- Check if detail page is mounted
    setDetailPageMounted(pathname.includes("works-detail"));
  }, [detailPageMounted, pathname]);

  // -----------------------------------------------------------
  // -- Get 'InView' state of 'Hero section' in 'WorkDetail' page inorder to pass it down to 'NavBar.js' through 'Header.js'

  const detailPageHeroExitViewHandler = useCallback((inView) => {
    setDetailPageHeroInView(inView);
  }, []);
  // -----------------------------------------------------------

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <Header
          detailPageMounted={detailPageMounted}
          detailPageHeroInView={detailPageHeroInView}
        />

        <main aria-live="polite">
          <AnimatePresence>
            <Routes location={location} key={pathname}>
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
