import React from "react";

import {
  SectionTitle,
  TitleProfessor,
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
  DashboardContentBox,
} from "./MyTimetable.style";
import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const MyTimetable = () => {
  return (
    <>
      <SectionTitle>내 시간표</SectionTitle>
      <DashboardContentBox isEmpty={timetableLectureList.length === 0}>
        {timetableLectureList.length !== 0 ? (
          <TimetableLectureList>
            {timetableLectureList.map(
              ({ id, name, professor, is_reviewed }, index) => (
                <TimeTableLectureRow key={index}>
                  <TitleProfessor>
                    <LectureTitle>{name}</LectureTitle>
                    <ProfessorGrey>{professor}</ProfessorGrey>
                    <LectureReviewButton isReviewed={is_reviewed} />
                  </TitleProfessor>
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
      </DashboardContentBox>
    </>
  );
};

export default MyTimetable;
