import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {
  DefaultContentWidth,
  MobileViewWidth,
} from "./static/Shared/commonStyles";
export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
      font-family: 'NotoSansCJKKR';
      font-weight: normal; 
      font-style: normal;
      src: url(assets/font/NotoSansCJKKR/NotoSansCJKkr-Regular.otf) format('opentype');
  }
  @font-face {
      font-family: 'NotoSansCJKKR';
      font-weight: 500; 
      font-style: normal;
      src: url(assets/font/NotoSansCJKKR/NotoSansCJKkr-Medium.otf) format('opentype');
  }
  @font-face {
      font-family: 'NanumSquareRound';
      font-weight: 800; 
      font-style: normal;
      src: url(assets/font/NanumSquareRound/NanumSquareRoundOTFEB.otf) format('opentype');
  }
  @font-face {
      font-family: 'NanumSquareRound';
      font-weight: normal; 
      font-style: normal;
      src: url(assets/font/NanumSquareRound/NanumSquareRoundOTFR.otf) format('opentype');
  }
  @font-face {
    font-family: 'SegoeUI';
    font-style: normal;
    font-weight: normal;
    src: url(assets/font/SegoeUI/SegoeUI.woff) format('woff'); 
  }

  *{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body, #root{
    font-family: 'NotoSansCJKKR', 'Noto Sans KR', 'Noto Sans', sans-serif;
    height: 100%;
    width: 100%;
  }
`;

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
    min-width: 320px;
    height: inherit;
  }
`;
