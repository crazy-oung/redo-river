import React from "react";
import {
  BannerSection,
  BannerImg,
  SubjectBold,
  SubjectNormal,
  SubjectSection,
  Wrapper,
} from "./styles/IndexPage.style";

const IndexPage = () => {
  return (
    <Wrapper>
      <BannerSection>
        <SubjectSection>
          <SubjectNormal>솔직한 강의평을 원한다면?</SubjectNormal>
          <SubjectBold>가자, 한강으로!</SubjectBold>
        </SubjectSection>
        <BannerImg />
      </BannerSection>
    </Wrapper>
  );
};

export default IndexPage;
