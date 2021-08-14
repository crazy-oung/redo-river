import React from "react";

import {
  SectionTitle,
  DashboardRightContentBox,
  TitleProfessorWrapper,
  LectureTitle,
  ProfessorGrey,
  NoReourceSection,
  NoResourceButtonSection,
  NoResourceButton,
  NoResource,
} from "../../../pages/IndexPage/styles/IndexPage.style";
import {
  TimetableLectureList,
  TimeTableLectureRow,
  LectureReviewButton,
} from "./MyTimetable.style";
import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const MyTimetable = () => {
  return (
    <>
      <SectionTitle>내 시간표</SectionTitle>
      <DashboardRightContentBox isEmpty={timetableLectureList.length === 0}>
        {timetableLectureList.length !== 0 ? (
          <TimetableLectureList>
            {timetableLectureList.map(
              ({ id, name, professor, is_reviewed }, index) => (
                <TimeTableLectureRow key={index}>
                  <TitleProfessorWrapper>
                    <LectureTitle>{name}</LectureTitle>
                    <ProfessorGrey>{professor}</ProfessorGrey>
                    <LectureReviewButton isReviewed={is_reviewed} />
                  </TitleProfessorWrapper>
                </TimeTableLectureRow>
              )
            )}
          </TimetableLectureList>
        ) : (
          <NoReourceSection>
            <NoResource>아직 작성한 시간표가 없습니다.</NoResource>
            <NoResourceButtonSection>
              <NoResourceButton>작성하러 가기</NoResourceButton>
            </NoResourceButtonSection>
          </NoReourceSection>
        )}
      </DashboardRightContentBox>
    </>
  );
};

export default MyTimetable;
