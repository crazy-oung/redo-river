import React from "react";
import {
  Wrapper,
  BannerSection,
  TitleSection,
  TitleBold,
  TitleNormal,
  BannerImg,
} from "./styles/IndexPage.style";

const IndexPage = () => {
  return (
    <Wrapper>
      <BannerSection>
        <TitleSection>
          <TitleNormal>솔직한 강의평을 원한다면?</TitleNormal>
          <TitleBold>가자, 한강으로!</TitleBold>
        </TitleSection>
        <BannerImg />
      </BannerSection>
    </Wrapper>
  );
};

export default IndexPage;
