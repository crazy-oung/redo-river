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
  MenuFocusedOn,
  AuthSection,
  AuthSectionLink,
  CenterLine,
  HomeIcon,
  LectureReviewIcon,
  LectureResourceIcon,
  TimetableIcon,
  MypageIcon,
} from "./Navigation.style";

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
          <Logo />
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
          <HomeIcon />홈
        </StyledNavLink>

        <StyledNavLink activeClassName="selected" to="/lectures">
          <LectureReviewIcon />
          강의평
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/resources">
          <LectureResourceIcon />
          강의자료
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/timetable">
          <TimetableIcon />
          시간표
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/my">
          <MypageIcon />
          마이페이지
        </StyledNavLink>
        <MenuFocusedOn location={currentLocation} />
      </NavigationSectionMobile>
    </NavigationWrapper>
  );
};

export default Navigation;
