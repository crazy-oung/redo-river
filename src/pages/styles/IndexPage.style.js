import styled from "styled-components";

import { HANGANG_MAIN_IMG } from "../../static/Shared/commonUrls";
import {
  FontColor,
  DefaultContentWidth,
} from "../../static/Shared/commonStyles";

export const Wrapper = styled.div`
  width: ${DefaultContentWidth};
  height: fit-content;
  margin: 40px auto 100px auto;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    margin: 40px 0 100px 0;
  }

  @media screen and (max-width: 630px) {
    width: auto;
    margin: auto;
  }
`;

export const BannerSection = styled.div`
  position: relative;
  width: 100%;
  height: 289px;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    width: 100vw;
  }

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  position: absolute;

  margin-bottom: 40px;
  left: 0;
  bottom: 0;
  flex-direction: column;
`;

export const TitleBold = styled.h1`
  margin-top: 16px;
  font-size: 36px;
  font-weight: 800;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const TitleNormal = styled.h3`
  font-size: 18px;
  font-weight: normal;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const BannerImg = styled.img.attrs({
  src: `${HANGANG_MAIN_IMG}`,
  alt: "banner-img",
})`
  position: absolute;

  right: 0;
  fill-opacity: 0;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    right: 20px;
  }
`;
