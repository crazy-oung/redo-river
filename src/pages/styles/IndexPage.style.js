import styled from "styled-components";

import { HANGANG_MAIN_IMG } from "../../static/Shared/commonUrls";
import {
  FontColor,
  DefaultContentWidth,
} from "../../static/Shared/commonStyles";

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 40px auto 100px auto;

  @media screen and (max-width: 630px) {
    width: auto;
    margin: auto;
  }
`;

export const BannerSection = styled.div`
  position: relative;
  min-width: ${DefaultContentWidth};
  height: 289px;

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const SubjectSection = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-bottom: 40px;
`;

export const SubjectBold = styled.h1`
  margin-top: 16px;
  font-size: 36px;
  font-weight: 800;
  color: ${FontColor};
`;

export const SubjectNormal = styled.h3`
  font-size: 18px;
  font-weight: normal;
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
    position: fixed;
    margin-right: 20px;
  }
`;
