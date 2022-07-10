import React from "react";
import { Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            {/* Fallback Route */}
            <Route path="*">
              {/* <Redirect to="/" /> */}
              <NotFoundPage />
            </Route>
          </Switch>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
