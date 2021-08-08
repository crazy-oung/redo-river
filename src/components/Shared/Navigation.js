import React from "react";
import { Link } from "react-router-dom";

import {
  NavigationWrapper,
  NavigationItemSection,
  Logo,
  StyledLinkWrapper,
  LinkSection,
  StyledLink,
  MenuFocusedOn,
  AuthSection,
  Item,
  CenterLine,
} from "./styles/Navigation.style";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItemSection>
        <Link to="/">
          <Logo />
        </Link>
        <LinkSection>
          <StyledLinkWrapper>
            <StyledLink to="/">홈</StyledLink>
            <StyledLink to="/lectures">강의평</StyledLink>
            <StyledLink to="/resources">강의자료</StyledLink>
            <StyledLink to="/timetable">시간표</StyledLink>
            <MenuFocusedOn />
          </StyledLinkWrapper>

          <AuthSection>
            <Item to="/login">로그인</Item>
            {/* <Item to="/my">마이페이지</Item> */}
            <CenterLine />
            <Item to="/signupauth">회원가입</Item>
            {/* <Item >로그아웃</Item> */}
          </AuthSection>
        </LinkSection>
      </NavigationItemSection>
    </NavigationWrapper>
  );
};

export default Navigation;
