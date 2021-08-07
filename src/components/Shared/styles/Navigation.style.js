import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  BorderColor,
  PrimaryColor,
  DefaultContentWidth,
} from "../../../static/Shared/commonStyles";
import { HANGANG_LOGO } from "../../../static/Shared/commonUrls";

export const NavigationWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;

  padding: 0 20px;

  border-bottom: 1px solid ${BorderColor};
  justify-content: center;

  @media screen and (max-width: 630px) {
    border-bottom: none;
    padding: 0 20px;
  }
`;

export const NavigationItemSection = styled.div`
  display: flex;
  position: relative;
  width: ${DefaultContentWidth};
  height: 100%;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: `${HANGANG_LOGO}`,
  alt: "한강 로고",
})`
  width: 80px;
  margin-right: 40px;
  cursor: pointer;

  @media screen and (max-width: 630px) {
    position: relative;
    height: 23px;
    left: -13px;
  }
`;

export const LinkSection = styled.div`
  display: flex;

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  all: unset;
  display: flex;
  width: 107px;
  color: ${PrimaryColor};
  justify-content: center;
  font-size: 17px;
  cursor: pointer;
`;

export const MenuFocusedOn = styled.div`
  display: block;
  position: absolute;
  width: 107px;
  height: 2px;
  bottom: -1px;
  background-color: ${PrimaryColor};
`;

export const AuthSection = styled.div`
  display: flex;
  position: absolute;
  height: 20px;
  top: calc(50% - 10px);
  right: 0;
  justify-content: space-around;
  align-items: center;
`;

export const CenterLine = styled.div`
  width: 1px;
  height: 15px;
  margin: 0px 24px;
  background-color: #dadada;
`;

export const Item = styled(Link)`
  all: unset;
  position: relative;
  top: -1px;

  color: ${PrimaryColor};
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;
