import React from "react";

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

const LectureRanking = () => {
  const currentDept = MajorArray[0].label;
  const displayLectures = {
    result: [
      {
        id: 1780,
        is_scraped: false,
        grade: 3,
        semester_data: ["2021년 1학기"],
        top3_hash_tag: [
          { id: 5, tag: "배운거많음" },
          { id: 6, tag: "좋은교수님" },
        ],
        code: "IFB323",
        name: "임베디드SOC설계및실습",
        department: "전기ㆍ전자ㆍ통신공학부",
        professor: "장영조",
        classification: "전선",
        total_rating: 5.0,
        last_reviewed_at: "2021-07-23T08:15:23.000+00:00",
        review_count: 1,
        is_deleted: false,
        created_at: "2021-07-22T11:35:35.000+00:00",
        updated_at: "2021-07-23T08:15:23.000+00:00",
      },
      {
        id: 1222,
        is_scraped: false,
        grade: 3,
        semester_data: ["2021년 1학기"],
        top3_hash_tag: [
          { id: 3, tag: "리얼수면제" },
          { id: 9, tag: "조금아쉬움" },
        ],
        code: "IFB270",
        name: "고급전자회로",
        department: "전기ㆍ전자ㆍ통신공학부",
        professor: "조현찬",
        classification: "전선",
        total_rating: 2.5,
        last_reviewed_at: "2021-07-23T20:20:06.000+00:00",
        review_count: 1,
        is_deleted: false,
        created_at: "2021-07-22T11:35:35.000+00:00",
        updated_at: "2021-07-23T20:20:06.000+00:00",
      },
      {
        id: 1159,
        is_scraped: false,
        grade: 3,
        semester_data: ["2021년 1학기", "2021년 2학기"],
        top3_hash_tag: [],
        code: "IFA740",
        name: "Research Experience ",
        department: "전기ㆍ전자ㆍ통신공학부",
        professor: "에이제이",
        classification: "전선",
        total_rating: 0.0,
        last_reviewed_at: "2021-07-21T14:04:42.000+00:00",
        review_count: 0,
        is_deleted: false,
        created_at: "2021-07-22T11:35:35.000+00:00",
        updated_at: "2021-07-22T15:48:25.000+00:00",
      },
      {
        id: 1162,
        is_scraped: false,
        grade: 3,
        semester_data: ["2021년 1학기"],
        top3_hash_tag: [],
        code: "IFE450",
        name: "RF회로설계",
        department: "전기ㆍ전자ㆍ통신공학부",
        professor: "오창헌",
        classification: "학부선",
        total_rating: 0.0,
        last_reviewed_at: "2021-07-21T14:04:42.000+00:00",
        review_count: 0,
        is_deleted: false,
        created_at: "2021-07-22T11:35:35.000+00:00",
        updated_at: "2021-07-22T15:48:25.000+00:00",
      },
      {
        id: 1169,
        is_scraped: false,
        grade: 3,
        semester_data: ["2021년 1학기"],
        top3_hash_tag: [],
        code: "IFC294",
        name: "객체지향프로그래밍",
        department: "전기ㆍ전자ㆍ통신공학부",
        professor: "설순욱",
        classification: "전필",
        total_rating: 0.0,
        last_reviewed_at: "2021-07-21T14:04:42.000+00:00",
        review_count: 0,
        is_deleted: false,
        created_at: "2021-07-22T11:35:35.000+00:00",
        updated_at: "2021-07-22T15:48:25.000+00:00",
      },
    ],
    count: 127,
  };

  return (
    <>
      <SectionTitle>강의랭킹</SectionTitle>
      <DashBoardContentBox>
        <LectureRankingDeptMenu>
          {MajorArray.map(({ label, value }) => (
            <Department isPicked={currentDept === label} key={label}>
              <DepartmentName name={label} />
            </Department>
          ))}
        </LectureRankingDeptMenu>
        <MenuFocusedOn />
        <LectureRankingList>
          {displayLectures.result.map(
            ({ id, name, professor, total_rating }, index) => (
              <LectureRow key={index}>
                <Ranking index={++index} />
                <TitleProfessorWrapper>
                  <LectureTitle>{name}</LectureTitle>
                  <Professor>{professor}</Professor>
                </TitleProfessorWrapper>
                <Rating>{total_rating.toFixed(1)}</Rating>
              </LectureRow>
            )
          )}
        </LectureRankingList>
      </DashBoardContentBox>
    </>
  );
};

export default LectureRanking;
