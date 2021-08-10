import styled from "styled-components";
import { Link } from "react-router-dom";
import { HANGANG_MAIN_IMG } from "../../../static/Shared/commonUrls";
import {
  FontColor,
  DefaultContentWidth,
  BorderColor,
  PrimaryColor,
  NoticeColor,
  PlaceholderColor,
} from "../../../static/Shared/commonStyles";

export const Wrapper = styled.div`
  width: ${DefaultContentWidth};
  height: fit-content;
  margin: 40px auto 100px auto;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    margin: 40px 0 100px 0;
  }

  @media screen and (max-width: 630px) {
    width: auto;
    margin: auto;
    min-height: calc(100% + 252px + 32px);
  }
`;

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 289px;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    width: 100vw;
  }

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const TitleSection = styled.aside`
  display: flex;
  position: absolute;

  margin-bottom: 40px;
  left: 0;
  bottom: 0;
  flex-direction: column;
`;

export const TitleBold = styled.h1`
  margin-top: 16px;
  font-size: 36px;
  font-weight: 800;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const TitleNormal = styled.h3`
  font-size: 18px;
  font-weight: normal;
  font-family: "NanumSquareRound";
  color: ${FontColor};
`;

export const BannerImg = styled.img.attrs({
  src: `${HANGANG_MAIN_IMG}`,
  alt: "banner-img",
})`
  position: absolute;

  right: 0;
  fill-opacity: 0;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    right: 20px;
  }
`;

// major seacrh
export const MajorSearchSection = styled.section`
  width: 100%;
  margin-bottom: 32px;

  @media screen and (max-width: 630px) {
    position: relative;
    margin-bottom: 24px;
    top: 404px;
  }
`;

export const SectionTitle = styled.h4`
  color: ${FontColor};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

export const MajorSearchContent = styled.div`
  width: 100%;
  margin-top: 16px;

  @media screen and (max-width: 630px) {
    width: calc(100% + 20px);
    margin-top: 0;
    margin-bottom: 32px;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const MajorSearchContentList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: calc(${DefaultContentWidth} + 20px)) {
    width: fit-content;
    margin-top: 8px;
    white-space: nowrap;
  }
`;

export const MajorShortcut = styled.li`
  all: unset;
  position: relative;

  width: 100px;
  height: 87px;

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

export const MajorCard = styled(Link)`
  display: block;

  width: 100%;
  height: 100%;

  background-image: url(${({ img }) => img});
  background-position-y: -7px;
  background-size: 100px 101px;
  background-repeat: no-repeat;
  border-radius: 8px;

  cursor: pointer;

  :before {
    all: unset;

    position: absolute;
    width: 68px;
    left: calc(50% - 34px);
    bottom: 9px;
    color: #fff;

    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;

    text-align: center;
    word-break: break-all;
    white-space: initial;

    cursor: pointer;
    content: "${({ majorName }) => majorName}";
  }

  @media screen and (max-width: 630px) {
    margin-right: 8px;

    background-size: 87px 87px;
    background-position-y: 0;
  }
`;

// rankings
export const DashBoardContentBox = styled.div`
  width: 100%;
  margin-top: 16px;
  border: 1px solid ${BorderColor};
  border-radius: 8px;

  @media screen and (max-width: 630px) {
    margin-top: 8px;
  }
`;

export const DashboardRightContentBox = styled(DashBoardContentBox)`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  min-height: 183px;

  @media screen and (max-width: 630px) {
    margin-top: 8px;
    min-height: auto;
    flex-wrap: wrap;
  }
`;

export const LectureRankingDeptMenu = styled.ul`
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

export const Department = styled.li`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  top: 12px;
  height: 100%;

  span {
    color: ${PrimaryColor};
  }

  @media screen and (max-width: 630px) {
    width: fit-content;
    padding-right: 12px;

    white-space: nowrap;
  }
`;

export const DepartmentName = styled.span`
  color: ${PlaceholderColor};
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  font-style: normal;
  cursor: pointer;

  :before {
    content: "${({ name }) =>
      name.length > 4
        ? name.split("·")[0][0] + "·" + name.split("·")[1][0]
        : name}";
  }

  @media screen and (max-width: 630px) {
    width: max-content;

    font-size: 14px;
    font-weight: normal;
    font-style: normal;

    :before {
      content: "${({ name }) => name}";
    }
  }
`;

export const MenuFocusedOn = styled.div`
  display: block;
  position: relative;
  width: 40px;
  height: 2px;

  bottom: 2px;
  left: 7px;
  background-color: ${NoticeColor};

  @media screen and (max-width: 630px) {
    width: 26px;
    height: 1px;

    bottom: 1px;
    left: 16px;
  }
`;

export const LectureRow = styled.li`
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

export const LectureList = styled.ul`
  ${LectureRow}:last-child {
    border-bottom: none;
  }
`;

export const Ranking = styled.span`
  margin: 0px 24px 0px 0px;

  color: ${PrimaryColor};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  :before {
    content: "0${({ index }) => index}";
  }

  @media screen and (max-width: 630px) {
    display: flex;
    width: auto;
    height: auto;
    margin: 0px 16px 0px 0px;
    color: ${FontColor};
    align-items: center;

    :before {
      content: "${({ index }) => index}";
    }
  }
`;

export const TitleProfessorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
  line-height: normal;
  letter-spacing: normal;

  color: ${FontColor};
`;

export const Professor = styled.span`
  color: ${FontColor};

  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: 630px) {
    color: #999;
  }
`;

export const Rating = styled.span`
  position: absolute;
  right: 24px;
  top: 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: 630px) {
    top: 18px;
    right: 16px;

    font-size: 18px;
  }
`;

// DashboardSections
export const DashboardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const DashboardLeftSection = styled.section`
  width: 464px;
  height: fit-content;

  @media screen and (max-width: 630px) {
    width: 100%;

    position: relative;
    top: -153px;
  }
`;
export const DashBoardRight = styled.div`
  width: 655px;
  margin-left: 16px;

  @media screen and (max-width: 630px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const DashboardRightTopSection = styled.section`
  width: 655px;
  margin-bottom: 32px;
  @media screen and (max-width: 630px) {
    position: relative;
    width: 100%;
    bottom: -218px;
    margin-top: 0;
  }
`;

export const DashboardRightBottom = styled.div`
  display: flex;
  width: 655px;

  @media screen and (max-width: 630px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const RightBottomLeftSection = styled.section`
  width: 368px;
  margin-right: 16px;

  @media screen and (max-width: 630px) {
    position: relative;
    width: 100%;
    top: -184px;
    margin-right: 0;
  }
`;

export const RightBottomRightSection = styled.section`
  width: 272px;

  @media screen and (max-width: 630px) {
    width: 100%;
  }
`;

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

// recommand Section
export const NoResource = styled.span`
  font-size: 12px;
  color: ${PlaceholderColor};
  line-height: normal;
  letter-spacing: normal;

  @media screen and (max-width: 630px) {
    padding: 51px 0;
  }
`;

export const RecommendedResourceBox = styled(DashboardRightContentBox)`
  border: 1px solid
    ${({ isData }) => (isData ? "transparent" : `${BorderColor}`)};

  @media screen and (max-width: 630px) {
    min-height: auto;
  }
`;

export const NoReourceSection = styled.div`
  padding: 55px 0 53px 0;
`;
export const NoResourceButtonSection = styled.div`
  margin: 6px 0;
`;

export const NoResourceButton = styled.button`
  width: 109px;
  height: 28px;

  margin: 0px 23px 0;
  padding: 5px 20px;

  border: none;
  border-radius: 20px;
  background-color: #eee;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;

  text-align: center;
  color: ${PlaceholderColor};
`;
