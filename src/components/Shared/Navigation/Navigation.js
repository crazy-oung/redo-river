import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  NavigationWrapper,
  NavigationSectionDesktop,
  NavigationSectionMobile,
  Logo,
  ShortcutSection,
  LinkSection,
  StyledNavLink,
  MobileMenuContext,
  MobileIconFigure,
  MobileNavText,
  MenuFocusedOn,
  AuthSection,
  AuthSectionLink,
  CenterLine,
} from "./Navigation.style";

import { ReactComponent as HomeIconSvg } from "../../../assets/svg/icon/home.svg";
import { ReactComponent as LectureReviewIconSvg } from "../../../assets/svg/icon/clipboard-check.svg";
import { ReactComponent as LectureResourceIconSvg } from "../../../assets/svg/icon/document-text.svg";
import { ReactComponent as TimetableIconSvg } from "../../../assets/svg/icon/template.svg";
import { ReactComponent as MyPageIconSvg } from "../../../assets/svg/icon/user.svg";
import { ReactComponent as HangangMainLogoSvg } from "../../../assets/svg/logo/hangang-logo.svg";
import { PrimaryColor } from "../../../static/Shared/commonStyles";

const Navigation = () => {
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );

  const history = useHistory();

  useEffect(() => {
    history.listen((localPath) => {
      setCurrentLocation(localPath.pathname);
    });
  }, [history]);

  const getAuth = () => {
    return false;
  };
  return (
    <NavigationWrapper>
      <NavigationSectionDesktop>
        <Link to="/">
          <Logo>
            <HangangMainLogoSvg fill={PrimaryColor} />
          </Logo>
        </Link>

        <LinkSection>
          <ShortcutSection>
            <StyledNavLink activeClassName="selected" exact to="/">
              홈
            </StyledNavLink>
            <StyledNavLink activeClassName="selected" to="/lectures">
              강의평
            </StyledNavLink>
            <StyledNavLink activeClassName="selected" to="/resources">
              강의자료
            </StyledNavLink>
            <StyledNavLink activeClassName="selected" to="/timetable">
              시간표
            </StyledNavLink>
            <MenuFocusedOn location={currentLocation} />
          </ShortcutSection>

          <AuthSection>
            {getAuth() ? (
              <>
                <AuthSectionLink to="/my">마이페이지</AuthSectionLink>
                <CenterLine />
                <AuthSectionLink>로그아웃</AuthSectionLink>
              </>
            ) : (
              <>
                <AuthSectionLink to="/login">로그인</AuthSectionLink>
                <CenterLine />
                <AuthSectionLink to="/signupauth">회원가입</AuthSectionLink>
              </>
            )}
          </AuthSection>
        </LinkSection>
      </NavigationSectionDesktop>

      <NavigationSectionMobile>
        <StyledNavLink activeClassName="selected" exact to="/">
          <MobileMenuContext>
            <MobileIconFigure>
              <HomeIconSvg />
            </MobileIconFigure>
            <MobileNavText>홈</MobileNavText>
          </MobileMenuContext>
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/lectures">
          <MobileMenuContext>
            <MobileIconFigure>
              <LectureReviewIconSvg />
            </MobileIconFigure>
            <MobileNavText>강의평</MobileNavText>
          </MobileMenuContext>
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/resources">
          <MobileMenuContext>
            <MobileIconFigure>
              <LectureResourceIconSvg />
            </MobileIconFigure>
            <MobileNavText>강의자료</MobileNavText>
          </MobileMenuContext>
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/timetable">
          <MobileMenuContext>
            <MobileIconFigure>
              <TimetableIconSvg />
            </MobileIconFigure>
            <MobileNavText>시간표</MobileNavText>
          </MobileMenuContext>
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/my">
          <MobileMenuContext>
            <MobileIconFigure>
              <MyPageIconSvg />
            </MobileIconFigure>
            <MobileNavText>마이페이지</MobileNavText>
          </MobileMenuContext>
        </StyledNavLink>
        <MenuFocusedOn location={currentLocation} />
      </NavigationSectionMobile>
    </NavigationWrapper>
  );
};

export default Navigation;
