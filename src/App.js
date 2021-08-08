import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { GlobalStyle, Main } from "./GlobalStyle";

import Navigation from "./components/Shared/Navigation";
import IndexPage from "./pages/IndexPage";
import Footer from "./components/Shared/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Main role="main">
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
