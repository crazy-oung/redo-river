import React, { useState, useEffect } from "react";

import {
  SectionTitle,
  DashBoardContentBox,
  TitleProfessorWrapper,
  LectureTitle,
  Professor,
  Rating,
} from "../../pages/IndexPage/styles/IndexPage.style";
import {
  LectureRankingDeptMenu,
  Department,
  DepartmentName,
  MenuFocusedOn,
  LectureRankingList,
  LectureRow,
  Ranking,
} from "./styles/LectureRanking.style";

import MajorArray from "../../static/IndexPage/majorArray";
import { MAJOR_LIST } from "../../static/Shared/MAJOR_LIST";
import { useGetLectureRankingByLectureQuery } from "../../api/indexApi";

const LectureRanking = () => {
  const [majorIndex, setMajorIndex] = useState(0);

  const getLecturRanking = (index) => {
    setMajorIndex(index);
  };

  const { data, error, isLoading } = useGetLectureRankingByLectureQuery(
    MAJOR_LIST[majorIndex].department
  );

  return (
    <>
      <SectionTitle>강의랭킹</SectionTitle>
      <DashBoardContentBox>
        <LectureRankingDeptMenu>
          {MajorArray.map(({ label }, index) => (
            <Department
              onClick={() => {
                getLecturRanking(index);
              }}
              isPicked={majorIndex === index}
              key={label}
            >
              <DepartmentName name={label} />
            </Department>
          ))}
        </LectureRankingDeptMenu>
        {/* <MenuFocusedOn location={majorIndex} /> */}
        <LectureRankingList>
          {error ? (
            <>Error</>
          ) : isLoading ? (
            <></>
          ) : data ? (
            data.result.map(({ id, name, professor, total_rating }, index) => {
              return (
                <LectureRow key={index}>
                  <Ranking index={++index} />
                  <TitleProfessorWrapper>
                    <LectureTitle>{name}</LectureTitle>
                    <Professor>{professor}</Professor>
                  </TitleProfessorWrapper>
                  <Rating>{total_rating.toFixed(1)}</Rating>
                </LectureRow>
              );
            })
          ) : null}
        </LectureRankingList>
      </DashBoardContentBox>
    </>
  );
};

export default LectureRanking;

// const getLectureRanking = (index = 0) => {
//   return useGetLectureRankingByLectureQuery(MAJOR_LIST[index].department);
// };
