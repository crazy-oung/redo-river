import styled from "styled-components";
import { Link } from "react-router-dom";

import { DefaultContentWidth } from "../../../static/Shared/commonStyles";
import {
  HANGANG_FOOTER_LOGO,
  FACEBOOK_ICON,
  HOME_ICON,
} from "../../../static/Shared/commonUrls";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 203px;
  background-color: #3e3e3e;

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  position: relative;
  width: ${DefaultContentWidth};

  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  width: 80px;
  height: fit-content;
`;

export const CenterSection = styled.div`
  display: flex;
  width: 668px;

  flex-direction: column;
  align-items: center;
`;

export const RightSection = styled.div`
  width: 80px;
  height: fit-content;
`;

export const Shortcut = styled.div`
  display: flex;
  justify-content: space-between;
  width: 291px;
  margin-bottom: 42.5px;
`;

export const ShortcutLink = styled(Link)`
  all: unset;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const ExternalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 19.5px;
`;

export const ExternalSectionButton = styled.button`
  font-size: 15px;
  border: 1px solid #c9c9c9;
  border-radius: 15px;
  padding: 4px 17px;
  background-color: transparent;
`;

export const ExternalLink = styled.a`
  all: unset;
  font-size: 15px;
  color: #c9c9c9;
  cursor: pointer;
`;

export const HangangLogo = styled.img.attrs({
  src: HANGANG_FOOTER_LOGO,
  alt: "한강",
})`
  width: 90px;
  height: 35px;
`;

export const FacebookIcon = styled.img.attrs({
  src: FACEBOOK_ICON,
  alt: "페이스북",
})`
  width: 15px;
  margin-right: 30px;
`;

export const HomeIcon = styled.img.attrs({
  src: HOME_ICON,
  alt: "홈",
})`
  width: 27px;
  height: 31px;
`;

export const CopyRight = styled.span`
  font-size: 12px;
  color: #b5b5b5;
`;
