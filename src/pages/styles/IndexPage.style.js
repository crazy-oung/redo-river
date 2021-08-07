import styled from "styled-components";

import { HANGANG_MAIN_IMG } from "../../static/Shared/commonUrls";
import {
  FontColor,
  DefaultContentWidth,
  BorderColor,
  PrimaryColor,
  PlaceholderColor,
} from "../../static/Shared/commonStyles";

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 40px auto 100px auto;

  @media screen and (max-width: 630px) {
    width: auto;
    margin: auto;
  }
`;

export const BannerSection = styled.div`
  position: relative;
  min-width: ${DefaultContentWidth};
  height: 289px;

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const BannerImg = styled.img.attrs({
  src: `${HANGANG_MAIN_IMG}`,
  alt: "banner-img",
})`
  position: absolute;

  right: 0;
  fill-opacity: 0;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    margin-right: 20px;
  }
`;

export const SubjectSection = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-bottom: 40px;
`;

export const SubjectBold = styled.h1`
  margin-top: 16px;
  font-size: 36px;
  font-weight: 800;
  color: ${FontColor};
`;

export const SubjectNormal = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: ${FontColor};
`;

// major seacrh

export const MajorSearchSection = styled.div`
  width: 100%;

  @media screen and (max-width: 630px) {
    position: relative;
    top: 406px;
  }
`;

export const SectionTitle = styled.h4`
  color: ${FontColor};
  font-size: 16px;
  font-weight: 500;
`;

export const MajorSearchContent = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media screen and (max-width: 630px) {
    width: calc(100% + 20px);
    margin-bottom: 32px;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const MajorSearchContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    width: fit-content;
    margin-top: 8px;
    white-space: nowrap;
  }
`;

export const MajorShortcut = styled.div`
  all: unset;
  position: relative;

  width: 100px;
  height: 87px;

  background-image: url(${({ img }) => img});
  background-size: 100px 97px;
  background-repeat: no-repeat;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    margin-right: 15px;
  }

  @media screen and (max-width: 630px) {
    width: 87px;
    height: 87px;
    margin-right: 8px;

    background-size: 87px 87px;
  }
`;

export const MajorName = styled.span`
  position: absolute;
  left: calc(50% - 34px);
  bottom: 5px;
  width: 68px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

// rankings
export const LectureRankingSection = styled.div`
  width: 100%;
  margin-top: 16px;
  border: 1px solid ${BorderColor};
  border-radius: 8px;

  @media screen and (max-width: 630px) {
    margin-top: 8px;
  }
`;

export const LectureRankingDeptMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 12px;
  border-bottom: 1px solid ${BorderColor};

  @media screen and (max-width: 630px) {
    height: 44px;
    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

// border-bottom: 2px solid transparent;
// TODO: 선택한 과목 포커싱처리

export const Department = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 7px;
  height: 100%;

  border-bottom: 2px solid #ffab2e;

  @media screen and (max-width: 630px) {
    width: fit-content;
    padding-right: 12px;
    padding-bottom: 5px;
    white-space: nowrap;
  }
`;

export const DepartmentName = styled.span`
  height: 18px;
  font-size: 12px;
  padding-top: 6px;
  cursor: pointer;

  @media screen and (max-width: 630px) {
    width: max-content;

    font-size: 14px;
    font-weight: normal;
    font-style: normal;
  }
`;

export const LectureRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 70px;
  padding: 16px 24px;
  border-bottom: 1px solid ${BorderColor};
  cursor: pointer;

  @media screen and (max-width: 630px) {
    height: 62px;
    padding: 12px 16px;
  }
`;

export const LectureList = styled.div`
  ${LectureRow}:last-child {
    border-bottom: none;
  }
`;

export const Ranking = styled.span`
  width: 21px;
  height: 27px;
  margin: 5px 24px 0px 0px;
  font-size: 18px;
  font-weight: 500;
  color: ${PrimaryColor};

  @media screen and (max-width: 630px) {
    display: flex;
    height: auto;
    margin: 0px 16px 0px 0px;
    color: ${FontColor};
    align-items: center;
  }
`;

export const TitleProfessorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 24px;
  width: 199px;

  @media screen and (max-width: 630px) {
    height: auto;
    justify-content: space-around;
  }
`;

export const LectureTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${FontColor};
`;

export const Professor = styled.span`
  font-size: 12px;
  color: ${FontColor};

  @media screen and (max-width: 630px) {
    color: #999;
    font-weight: normal;
  }
`;

export const Classification = styled.span`
  width: 50px;
  margin: 8px 24px 0px 0px;
  font-size: 12px;
  text-align: center;
`;

export const Rating = styled(Classification)`
  position: absolute;
  right: 24px;
  width: 24px;
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0px 0px 0px;

  @media screen and (max-width: 630px) {
    display: flex;
    height: auto;
    top: 24px;
    font-size: 18px;
  }
`;

// DashboardSection

export const DashboardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const DashboardLeftSection = styled.section`
  width: 464px;
  height: fit-content;

  @media screen and (max-width: 630px) {
    width: 100%;

    position: relative;
    top: -144px;
  }
`;
export const DashBoardRightSection = styled.section`
  width: 655px;
  margin-left: 16px;

  @media screen and (max-width: 630px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const DashboardRightTop = styled.section`
  width: 655px;
  margin-bottom: 32px;
  @media screen and (max-width: 630px) {
    margin-top: 24px;
  }
`;

export const RestBottomSection = styled.section`
  display: flex;
  width: 655px;
`;

export const RestBottomLeftSection = styled.section`
  width: 368px;
  margin-right: 16px;
`;

export const RestBottomRightSection = styled.section`
  width: 272px;
`;

// recommand

export const LeftSide = styled.div`
  width: 465px;
  margin-right: 16px;
`;

export const LeftTopSide = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 16px;
`;

export const LeftBottomSide = styled.div`
  display: flex;
  height: 87px;
`;

export const RightSide = styled.div``;

export const NoResource = styled.span`
  font-size: 12px;
  color: ${PlaceholderColor};
`;

export const RecommendedResource = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 183px;
  border: 1px solid
    ${({ isData }) => (isData ? "transparent" : `${BorderColor}`)};
  border-radius: 8px;
  margin-top: 16px;

  @media screen and (max-width: 630px) {
    margin-top: 8px;
  }
`;
