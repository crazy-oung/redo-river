import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { GlobalStyle, Main } from "./GlobalStyle";

import Navigation from "./components/Shared/Navigation";
import IndexPage from "./pages/IndexPage/IndexPage";
import Footer from "./components/Shared/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Main role="main">
        <Switch>
          <Route path="/" exact component={IndexPage} />

          {/* 라우터 테스팅용 주소 컴포넌트 인덱스 페이지로 통일 */}
          <Route path="/lectures" component={IndexPage} />
          <Route path="/resources" component={IndexPage} />
          <Route path="/timetable" component={IndexPage} />
          <Route path="/my" component={IndexPage} />

          <Redirect from="*" to="/" />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
