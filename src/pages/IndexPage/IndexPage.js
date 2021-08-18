import React from "react";

import {
  Index,
  BannerSection,
  TitleSection,
  TitleBold,
  TitleNormal,
  BannerImg,
  MajorSearchSection,
  DashboardSection,
  DashboardLeft,
  DashBoardRight,
  DashboardRightTopSection,
  DashboardRightBottom,
  RightBottomLeftSection,
  RightBottomRightSection,
} from "./styles/IndexPage.style";

import MajorSearch from "../../components/IndexPage/MajorSearch/MajorSearch";
import LectureRanking from "../../components/IndexPage/LectureRanking/LectureRanking";
import RecommendedResource from "../../components/IndexPage/RecommendedResource/RecommendedResource";
import MyTimetable from "../../components/IndexPage/MyTimetable/MyTimetable";
import LateViewedLecture from "../../components/IndexPage/LateViewedLecture/LateViewedLecture";

import { ReactComponent as HangangMainSvg } from "../../assets/svg/main-illust.svg";
import { timetableLectureList } from "../../static/IndexPage/sampleData";

const IndexPage = () => {
  return (
    <Index>
      <BannerSection>
        <TitleSection>
          <TitleNormal>솔직한 강의평을 원한다면?</TitleNormal>
          <TitleBold>가자, 한강으로!</TitleBold>
        </TitleSection>
        <BannerImg>
          <HangangMainSvg />
        </BannerImg>
      </BannerSection>

      <MajorSearchSection>
        <MajorSearch />
      </MajorSearchSection>

      <DashboardSection>
        <DashboardLeft>
          <LectureRanking />
        </DashboardLeft>

        <DashBoardRight>
          <DashboardRightTopSection
            timetableLectureListSize={timetableLectureList.length}
          >
            <RecommendedResource />
          </DashboardRightTopSection>

          <DashboardRightBottom>
            <RightBottomLeftSection>
              <MyTimetable />
            </RightBottomLeftSection>

            <RightBottomRightSection>
              <LateViewedLecture />
            </RightBottomRightSection>
          </DashboardRightBottom>
        </DashBoardRight>
      </DashboardSection>
    </Index>
  );
};

export default IndexPage;
