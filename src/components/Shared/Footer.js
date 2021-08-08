import React from "react";
import { Link } from "react-router-dom";

import {
  FooterWrapper,
  FooterContent,
  LeftSection,
  CenterSection,
  RightSection,
  Shortcut,
  ShortcutLink,
  ExternalSection,
  ExternalSectionButton,
  ExternalLink,
  HangangLogo,
  FacebookIcon,
  HomeIcon,
  CopyRight,
} from "./styles/Footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LeftSection>
          <HangangLogo />
        </LeftSection>
        <CenterSection>
          <Shortcut>
            <ShortcutLink to="/lectures">강의평</ShortcutLink>
            <ShortcutLink to="/resources">강의자료</ShortcutLink>
            <ShortcutLink to="/timetable">시간표</ShortcutLink>
          </Shortcut>

          <ExternalSection>
            <ExternalSectionButton>
              <ExternalLink href="https://bcsdlab.com/">
                BCSD Lab 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink href="https://www.koreatech.ac.kr/kor/Main.do">
                코리아텍 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink href="https://portal.koreatech.ac.kr/login.jsp">
                아우누리 바로가기
              </ExternalLink>
            </ExternalSectionButton>
            <ExternalSectionButton>
              <ExternalLink>개인정보 처리방침</ExternalLink>
            </ExternalSectionButton>
          </ExternalSection>
          <CopyRight>
            COPYRIGHT © {new Date().getFullYear()} BCSD LAB ALL RIGHTS RESERVED.
          </CopyRight>
        </CenterSection>
        <RightSection>
          <ExternalLink href="https://www.facebook.com/BCSD-Lab-1727922507422214/">
            <FacebookIcon />
          </ExternalLink>
          <ExternalLink href="/">
            <HomeIcon />
          </ExternalLink>
        </RightSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;