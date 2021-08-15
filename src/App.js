import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import {
  DefaultContentWidth,
  MobileViewWidth,
} from "./static/Shared/commonStyles";

import Navigation from "./components/Shared/Navigation/Navigation";
import Footer from "./components/Shared/Footer/Footer";
import IndexPage from "./pages/IndexPage/IndexPage";

export const Main = styled.main`
  min-height: 900px;

  min-width: ${DefaultContentWidth};
  padding: 0 20px;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    height: inherit;
    padding: 0;
    min-width: 320px;
  }
`;

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

          <Route path="/login" component={IndexPage} />
          <Route path="/signupauth" component={IndexPage} />

          <Redirect from="*" to="/" />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
