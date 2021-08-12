import React from "react";

import {
  Wrapper,
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

import MajorSearch from "../../components/IndexPage/MajorSearch";
import LectureRanking from "../../components/IndexPage/LectureRanking";
import RecommendedResource from "../../components/IndexPage/RecommendedResource";
import MyTimetable from "../../components/IndexPage/MyTimetable";
import LateViewedLecture from "../../components/IndexPage/LateViewedLecture";

// import { useGetLectureRankingByLectureQuery } from "../../api/indexApi";
import { timetableLectureList } from "../../static/IndexPage/sampleData";

const IndexPage = () => {
  // const [isFetched, setIsFetched] = useState(false);
  // const [lectureList, setLectureList] = useState([]);
  // const [resourceList, setResourceList] = useState([]);

  // const {
  //   data: lectureList,
  //   isLoading,
  //   isError,
  // } = useGetLectureRankingByLectureQuery("교양학부");

  // if (isError) return <div>An error has occurred!</div>;
  // if (isLoading) return <Wrapper />;

  return (
    <Wrapper>
      {/* {!isLoading && ( */}
      <>
        <BannerSection>
          <TitleSection>
            <TitleNormal>솔직한 강의평을 원한다면?</TitleNormal>
            <TitleBold>가자, 한강으로!</TitleBold>
          </TitleSection>
          <BannerImg />
        </BannerSection>

        <MajorSearchSection>
          <MajorSearch />
        </MajorSearchSection>

        <DashboardSection>
          <DashboardLeft>
            {/* <LectureRanking lectureList={lectureList.result} /> */}
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
                {/* <MyTimetable lectureList={lectureList.result} /> */}
                <MyTimetable />
              </RightBottomLeftSection>

              <RightBottomRightSection>
                {/* <LateViewedLecture lectureList={lectureList.result} /> */}
                <LateViewedLecture />
              </RightBottomRightSection>
            </DashboardRightBottom>
          </DashBoardRight>
        </DashboardSection>
      </>
    </Wrapper>
  );
};

export default IndexPage;
