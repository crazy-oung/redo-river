import React from "react";

import {
  SectionTitle,
  DashboardRightContentBox,
  NoReourceSection,
  NoResource,
  TitleProfessorWrapper,
  LectureTitle,
  ProfessorGrey,
  Rating,
} from "../../pages/IndexPage/styles/IndexPage.style";
import { LectureList, LectureRow } from "./styles/LateViewedLecture.style";

const LateViewedLecture = ({ lectureList = [] }) => {
  return (
    <>
      <SectionTitle>최근 본 강의</SectionTitle>
      <DashboardRightContentBox isEmpty={lectureList.length === 0}>
        {lectureList.length !== 0 ? (
          <LectureList>
            {lectureList.map(({ id, name, professor, rating }, index) => (
              <LectureRow key={index}>
                <TitleProfessorWrapper>
                  <LectureTitle>{name}</LectureTitle>
                  <ProfessorGrey>{professor}</ProfessorGrey>
                </TitleProfessorWrapper>
                <Rating>{rating.toFixed(1)}</Rating>
              </LectureRow>
            ))}
          </LectureList>
        ) : (
          <NoReourceSection>
            <NoResource>최근에 본 강의가 없습니다.</NoResource>
          </NoReourceSection>
        )}
      </DashboardRightContentBox>
    </>
  );
};

export default LateViewedLecture;
