import React, { useEffect, useState } from "react";

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
  LectureRankingList,
  LectureRow,
  Ranking,
} from "./styles/LectureRanking.style";

import MajorArray from "../../static/IndexPage/majorArray";
import { MAJOR_LIST } from "../../static/Shared/MAJOR_LIST";
import { useGetLectureRankingByLectureQuery } from "../../api/indexApi";

const LectureRanking = () => {
  const [majorIndex, setMajorIndex] = useState(0);

  const { data, isLoading } = useGetLectureRankingByLectureQuery(
    MAJOR_LIST[majorIndex].department
  );

  useEffect(() => {
    console.log("used");
  }, [majorIndex]);

  return (
    <>
      <SectionTitle>강의랭킹</SectionTitle>
      <DashBoardContentBox>
        <LectureRankingDeptMenu>
          {MajorArray.map(({ label }, index) => (
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
