import React, { useEffect, useCallback, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";

import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import WorkDetail from "./pages/WorksDetail/WorkDetail";
import Curtain from "./components/Curtain/Curtain";
import SecretMessage from "./components/SecretMessage/SecretMessage";

function App() {
  const location = useLocation();
  const [homePagePresent, setHomePagePresent] = useState();
  const [detailPagePresent, setDetailPagePresent] = useState();
  const [detailPageMounted, setDetailPageMounted] = useState();
  const [detailPageHeroInView, setDetailPageHeroInView] = useState();

  const { pathname } = location;

  // -----------------------------------------------------------
  // -- If detail page is mounted && Detail page hero section is not inView  -->  Change nav color

  useEffect(() => {
    // -- Check if detail page is mounted
    setDetailPageMounted(pathname.includes("works-detail"));
  }, [detailPageMounted, pathname]);

  // -- Get 'InView' state of 'Hero section' in 'WorkDetail' page inorder to pass it down to 'NavBar.js' through 'Header.js'
  const detailPageHeroExitViewHandler = useCallback((inView) => {
    setDetailPageHeroInView(inView);
  }, []);
  // -----------------------------------------------------------

  // -----------------------------------------------------------
  // -- Curtain page transition animation
  const homePageTransitionHandler = useCallback((pagePresent) => {
    setHomePagePresent(pagePresent);
  }, []);

  const detailPageTransitionHandler = useCallback((pagePresent) => {
    setDetailPagePresent(pagePresent);
  }, []);
  // -----------------------------------------------------------

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <SecretMessage />

        <Curtain main />

        {!homePagePresent && <Curtain page />}
        {!detailPagePresent && <Curtain page />}

        <Header
          detailPageMounted={detailPageMounted}
          detailPageHeroInView={detailPageHeroInView}
        />
        <main aria-live="polite">
          <AnimatePresence initial={false}>
            <Routes location={location} key={pathname}>
              <Route
                path="/"
                element={<Home onPageTransition={homePageTransitionHandler} />}
              />

              <Route
                path="/works-detail/:workId"
                element={
                  <WorkDetail
                    onDetailPageHeroExitView={detailPageHeroExitViewHandler}
                    onPageTransition={detailPageTransitionHandler}
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
