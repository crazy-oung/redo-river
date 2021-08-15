import React, { useState } from "react";

import {
  SectionTitle,
  DashBoardContentBox,
  TitleProfessorWrapper,
  LectureTitle,
  Professor,
  Rating,
} from "../../../pages/IndexPage/styles/IndexPage.style";
import {
  LectureRankingDeptMenu,
  Department,
  DepartmentName,
  LectureRankingList,
  LectureRow,
  Ranking,
} from "./LectureRanking.style";

import MAJOR_ARRAY from "../../../static/IndexPage/majorArray";
import { useGetLectureRankingByDepartmentIdQuery } from "../../../api/indexApi";

const LectureRanking = () => {
  const [majorIndex, setMajorIndex] = useState(0);

  const { data, isLoading } = useGetLectureRankingByDepartmentIdQuery({
    limit: 5,
    departmentId: MAJOR_ARRAY[majorIndex].id,
  });

  return (
    <>
      <SectionTitle>강의랭킹</SectionTitle>
      <DashBoardContentBox>
        <LectureRankingDeptMenu>
          {MAJOR_ARRAY.map(({ label }, index) => (
            <Department
              onClick={() => {
                setMajorIndex(index);
              }}
              isPicked={majorIndex === index}
              key={label}
            >
              <DepartmentName name={label} />
            </Department>
          ))}
        </LectureRankingDeptMenu>
        <LectureRankingList>
          {!isLoading &&
            data.result.map(({ id, name, professor, total_rating }, index) => {
              return (
                <LectureRow key={index}>
                  <Ranking index={index + 1} />
                  <TitleProfessorWrapper>
                    <LectureTitle>{name}</LectureTitle>
                    <Professor>{professor}</Professor>
                  </TitleProfessorWrapper>
                  <Rating>{total_rating.toFixed(1)}</Rating>
                </LectureRow>
              );
            })}
        </LectureRankingList>
      </DashBoardContentBox>
    </>
  );
};

export default LectureRanking;
