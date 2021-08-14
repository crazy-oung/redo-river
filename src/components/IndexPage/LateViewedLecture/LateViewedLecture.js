import React from "react";

import {
  SectionTitle,
  DashboardRightContentBox,
  NoResource,
  TitleProfessorWrapper,
  LectureTitle,
  ProfessorGrey,
  Rating,
} from "../../../pages/IndexPage/styles/IndexPage.style";
import {
  LectureList,
  LectureRow,
  ViewedNoReourceSection,
} from "./LateViewedLecture.style";

import { timetableLectureList } from "../../../static/IndexPage/sampleData";

const getCachedLecture = JSON.parse(
  localStorage.getItem("Hangang.LateViewedLecture")
);

const LateViewedLecture = () => {
  try {
    if (!getCachedLecture) {
      console.log("최근 본 강의 데이터가 존재하지 않습니다.");

      const cachedLecture = JSON.stringify(timetableLectureList);
      localStorage.setItem("Hangang.LateViewedLecture", cachedLecture);
    } else {
      console.log("최근 본 강의 데이터가 존재해 캐시를 저장하지 않았습니다.");
    }
  } catch (error) {
    localStorage.removeItem("Hangang.LateViewedLecture");
    const cachedLecture = JSON.stringify(timetableLectureList);
    localStorage.setItem("Hangang.LateViewedLecture", cachedLecture);

    throw new Error(error);
  }

  return (
    <>
      <SectionTitle>최근 본 강의</SectionTitle>
      <DashboardRightContentBox isEmpty={getCachedLecture ? true : false}>
        {getCachedLecture != null && getCachedLecture.length !== 0 ? (
          <LectureList>
            {getCachedLecture.map(({ id, name, professor, rating }, index) => (
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
          <ViewedNoReourceSection>
            <NoResource>최근에 본 강의가 없습니다.</NoResource>
          </ViewedNoReourceSection>
        )}
      </DashboardRightContentBox>
    </>
  );
};

export default LateViewedLecture;
