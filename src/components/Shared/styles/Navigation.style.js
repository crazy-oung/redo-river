import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import {
  BorderColor,
  PrimaryColor,
  PlaceholderColor,
  DefaultContentWidth,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";
import {
  HANGANG_LOGO,
  HOME_ICON,
  LECTURE_REVIEW_ICON,
  LECTURE_RESOURCE_ICON,
  TIMETABLE_ICON,
  USER_ICON,
} from "../../../static/Shared/commonUrls";

const getCurrentLocationIndex = (location) => {
  let path = location.split("/");

  switch ("/" + path[1]) {
    case "/lectures":
      return 1;
    case "/resources":
      return 2;
    case "/timetable":
      return 3;
    case "/my":
      return 4;
    case "/":
      return 0;
    default:
      return -1;
  }
};

export const NavigationWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;

  padding: 0 20px;

  border-bottom: 1px solid ${BorderColor};
  justify-content: center;

  @media screen and (max-width: ${MobileViewWidth}) {
    border-bottom: none;
    padding: 0 20px;
  }
`;

export const NavigationSectionDesktop = styled.div`
  display: flex;
  position: relative;
  width: ${DefaultContentWidth};
  height: 100%;

  align-items: center;
`;

export const NavigationSectionMobile = styled.div`
  display: none;
  position: fixed;
  width: auto;
  height: 72px;
  bottom: 0;
  border-top: 1.5px solid ${BorderColor};
  background: #fff;

  align-items: center;
  z-index: 10;
  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: 100%;
    padding: 16px 0;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.img.attrs({
  src: `${HANGANG_LOGO}`,
  alt: "한강 로고",
})`
  width: 80px;
  margin-right: 40px;
  cursor: pointer;

  @media screen and (max-width: ${MobileViewWidth}) {
    position: relative;
    height: 28px;
    left: -8px;
  }
`;

export const LinkSection = styled.div`
  display: flex;

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const ShortcutSection = styled.div`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  display: flex;
  width: 107px;
  color: ${PrimaryColor};

  justify-content: center;
  font-size: 17px;
  cursor: pointer;

  &.selected {
    color: ${PrimaryColor};
    transition: transform 0.4s ease;
    div {
      background-color: ${PrimaryColor};
    }
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: calc(100% / 5);
    color: ${PlaceholderColor};
    font-size: 11px;
  }
`;

export const MenuFocusedOn = styled.div`
  display: ${({ location }) =>
    getCurrentLocationIndex(location) != -1 ? "block" : "none"};
  position: absolute;
  width: 107px;
  height: 2px;

  bottom: -1px;
  background-color: ${PrimaryColor};

  transition: transform 0.4s ease;
  transform: translateX(
    ${({ location }) => getCurrentLocationIndex(location) * 107}px
  );

  @media screen and (max-width: ${MobileViewWidth}) {
    width: calc(100% / 5);
    left: 0;
    bottom: 70px;

    transform: translateX(
      ${({ location }) =>
        "calc( " + getCurrentLocationIndex(location) + " * (100vw / 5))"}
    );
  }
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

export const AuthSectionLink = styled(Link)`
  all: unset;
  position: relative;
  top: -1px;

  color: ${PrimaryColor};
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;

// Icons
export const HomeIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;

  background-color: ${({ isFocused }) =>
    isFocused ? `${PrimaryColor}` : `${PlaceholderColor}`};

  -webkit-mask: url(${HOME_ICON}) no-repeat center;
  mask: url(${HOME_ICON}) no-repeat center;
}
`;

export const LectureReviewIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  background-color: ${({ isFocused }) =>
    isFocused ? `${PrimaryColor}` : `${PlaceholderColor}`};

  -webkit-mask: url(${LECTURE_REVIEW_ICON}) no-repeat center;
  mask: url(${LECTURE_REVIEW_ICON}) no-repeat center;
}
`;

export const LectureResourceIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  background-color: ${({ isFocused }) =>
    isFocused ? `${PrimaryColor}` : `${PlaceholderColor}`};

  -webkit-mask: url(${LECTURE_RESOURCE_ICON}) no-repeat center;
  mask: url(${LECTURE_RESOURCE_ICON}) no-repeat center;
}
`;

export const TimetableIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  background-color: ${({ isFocused }) =>
    isFocused ? `${PrimaryColor}` : `${PlaceholderColor}`};

  -webkit-mask: url(${TIMETABLE_ICON}) no-repeat center;
  mask: url(${TIMETABLE_ICON}) no-repeat center;
}
`;

export const MypageIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  background-color: ${({ isFocused }) =>
    isFocused ? `${PrimaryColor}` : `${PlaceholderColor}`};

  -webkit-mask: url(${USER_ICON}) no-repeat center;
  mask: url(${USER_ICON}) no-repeat center;
}
`;
