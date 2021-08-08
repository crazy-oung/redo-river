import React from "react";
import { Link } from "react-router-dom";

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
} from "./styles/Navigation.style";

/**
 * FIXME:
 * - [ ] 머무는 곳 포커싱 해야됨
 * @returns
 */
const Navigation = () => {
  return (
    <NavigationWrapper>
      {/* Desktop view navigation */}
      <NavigationSectionDesktop>
        <Link to="/">
          <Logo />
        </Link>

        <LinkSection>
          <ShortcutSection>
            <StyledNavLink to="/">홈</StyledNavLink>
            <StyledNavLink to="/lectures">강의평</StyledNavLink>
            <StyledNavLink to="/resources">강의자료</StyledNavLink>
            <StyledNavLink to="/timetable">시간표</StyledNavLink>
            <MenuFocusedOn />
          </ShortcutSection>

          <AuthSection>
            <AuthSectionLink to="/login">로그인</AuthSectionLink>
            {/* <AuthSectionLink to="/my">마이페이지</AuthSectionLink> */}
            <CenterLine />
            <AuthSectionLink to="/signupauth">회원가입</AuthSectionLink>
            {/* <AuthSectionLink >로그아웃</AuthSectionLink> */}
          </AuthSection>
        </LinkSection>
      </NavigationSectionDesktop>

      {/* Mobile view navigation
       * FIXME:
       * 버튼 활성화 처리 어떻게 할 거?
       */}
      <NavigationSectionMobile>
        <StyledNavLink activeClassName="selected" exact to="/">
          <HomeIcon isFocused={true} />홈
        </StyledNavLink>

        <StyledNavLink activeClassName="selected" to="/lectures">
          <LectureReviewIcon isFocused={false} />
          강의평
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/resources">
          <LectureResourceIcon isFocused={false} />
          강의자료
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/timetable">
          <TimetableIcon isFocused={false} />
          시간표
        </StyledNavLink>
        <StyledNavLink activeClassName="selected" to="/mypage">
          <MypageIcon isFocused={false} />
          마이페이지
        </StyledNavLink>
        <MenuFocusedOn />
      </NavigationSectionMobile>
    </NavigationWrapper>
  );
};

export default Navigation;
