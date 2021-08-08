import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { DefaultContentWidth } from "./static/Shared/commonStyles";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: "Noto Sans KR";
        src: url("'https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'") format("opentype");
        font-style: normal;
        font-weight: normal;
    }
    *{
        box-sizing:border-box;
    }
    html, body, #root{
        font-family: 'Noto Sans KR', sans-serif;
        height:100%;
        width:100%;
    }
`;

export const Main = styled.main`
  height: fit-content;
  min-height: 1080px;
  min-width: ${DefaultContentWidth};
  padding: 0 20px;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: 630px) {
    min-width: auto;
  }
`;
