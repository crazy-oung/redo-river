import React from "react";
import {
  Wrapper,
  BannerSection,
  TitleSection,
  TitleBold,
  TitleNormal,
  BannerImg,
  MajorSearchContent,
  MajorSearchContentList,
  SectionTitle,
  MajorShortcut,
  MajorCard,
  MajorSearchSection,
  DashBoardContentBox,
  DashboardRightContentBox,
  TitleProfessorWrapper,
  LectureRankingDeptMenu,
  MenuFocusedOn,
  Department,
  DepartmentName,
  LectureList,
  LectureRow,
  Professor,
  Ranking,
  Rating,
  LectureTitle,
  DashboardSection,
  DashboardLeftSection,
  DashBoardRight,
  DashboardRightTopSection,
  DashboardRightBottom,
  RightBottomLeftSection,
  RightBottomRightSection,
  NoResource,
  RecommendedResourceBox,
  NoReourceSection,
  NoResourceButtonSection,
  NoResourceButton,
} from "./styles/IndexPage.style";

import MajorArray from "../../static/IndexPage/majorArray";
/**
 * TODO:
 * - [ ] 컴포넌트 분리 ***
 *  - [ ] 컴포넌트 따라 스타일 코드 분리
 *
 * @returns
 */
// *  인데스 파일안에 있는 Section들을 컴포넌트로 분리할 예정입니다.
const IndexPage = () => {
  //TODO: API연동 후 지울 것
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

  const lectureList = [
    {
      id: 810,
      lecture_id: 2014,
      lecture_timetable_id: 1565,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "CSE133",
      name: "컴퓨터네트워크",
      classification: "학부필",
      grades: "3",
      classNumber: "03",
      regular_number: "50",
      department: "컴퓨터공학부",
      target: "컴부3",
      professor: "무하마드",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[10, 11, 12, 13, 200, 201]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 811,
      lecture_id: 1397,
      lecture_timetable_id: 1579,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "CSE235",
      name: "데이터베이스시스템",
      classification: "학부선",
      grades: "3",
      classNumber: "02",
      regular_number: "50",
      department: "컴퓨터공학부",
      target: "컴부3",
      professor: "무하마드",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[100, 101, 102, 103, 404, 405, 406, 407]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 812,
      lecture_id: 1703,
      lecture_timetable_id: 946,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "LAN316",
      name: "영어읽기와쓰기",
      classification: "교필",
      grades: "3",
      classNumber: "14",
      regular_number: "50",
      department: "교양학부",
      target: "전체",
      professor: "유소연",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[4, 5, 6, 7, 202, 203]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 813,
      lecture_id: 606,
      lecture_timetable_id: 877,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "HRD150",
      name: "교수설계및교육방법",
      classification: "HRD선택",
      grades: "2",
      classNumber: "07",
      regular_number: "50",
      department: "HRD학과",
      target: "컴부3",
      professor: "신임교원 배정예정",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[104, 105, 106, 107]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-31T04:33:33.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 814,
      lecture_id: 1645,
      lecture_timetable_id: 1081,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "BSM100",
      name: "수학적사고",
      classification: "MSC필수",
      grades: "4",
      classNumber: "01",
      regular_number: "50",
      department: "교양학부",
      target: "전체",
      professor: "한성휴",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[110, 111, 112, 113, 310, 311, 312, 313]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 824,
      lecture_id: 1775,
      lecture_timetable_id: 1027,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "LAN613",
      name: "일본어1",
      classification: "교선",
      grades: "3",
      classNumber: "04",
      regular_number: "50",
      department: "교양학부",
      target: "전체",
      professor: "김미옥",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[210, 211, 212, 213, 214, 215]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 825,
      lecture_id: 1357,
      lecture_timetable_id: 889,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "HRD230",
      name: "기업내교육론",
      classification: "HRD선택",
      grades: "2",
      classNumber: "01",
      regular_number: "50",
      department: "HRD학과",
      target: "전체",
      professor: "정일찬",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[0, 1, 2, 3]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
    {
      id: 826,
      lecture_id: 1953,
      lecture_timetable_id: 816,
      is_scraped: false,
      is_custom: false,
      user_timetable_id: null,
      semester_date: "7",
      code: "HRD011",
      name: "직업능력개발훈련평가",
      classification: "HRD필수",
      grades: "2",
      classNumber: "07",
      regular_number: "50",
      department: "HRD학과",
      target: "메카3,메카4",
      professor: "최현숙",
      is_english: null,
      design_score: null,
      is_elearning: null,
      class_time: "[410, 411, 412, 413]",
      created_at: "2021-07-22T06:53:56.000+00:00",
      updated_at: "2021-07-22T06:53:56.000+00:00",
      rating: 0.0,
      memo: null,
      is_reviewed: false,
    },
  ];

  const onFirstLoad = false;
  return (
    <Wrapper>
      <BannerSection>
        <TitleSection>
          <TitleNormal>솔직한 강의평을 원한다면?</TitleNormal>
          <TitleBold>가자, 한강으로!</TitleBold>
        </TitleSection>
        <BannerImg />
      </BannerSection>

      <MajorSearchSection>
        <SectionTitle>학부별 탐색</SectionTitle>
        <MajorSearchContent>
          <MajorSearchContentList>
            {MajorArray.map(({ src, label, value }, index) => (
              <MajorShortcut key={label}>
                <MajorCard
                  img={src}
                  majorName={value}
                  index={index}
                  onClick={() => {
                    alert(index + ", " + value);
                  }}
                  to="/"
                ></MajorCard>
              </MajorShortcut>
            ))}
          </MajorSearchContentList>
        </MajorSearchContent>
      </MajorSearchSection>

      <DashboardSection>
        <DashboardLeftSection>
          <SectionTitle>강의랭킹</SectionTitle>
          <DashBoardContentBox>
            <LectureRankingDeptMenu>
              {MajorArray.map(({ label, value }) => (
                <Department isPicked={!onFirstLoad} key={label}>
                  <DepartmentName name={label} />
                </Department>
              ))}
            </LectureRankingDeptMenu>
            <MenuFocusedOn />
            <LectureList>
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
            </LectureList>
          </DashBoardContentBox>
        </DashboardLeftSection>

        <DashBoardRight>
          <DashboardRightTopSection>
            <SectionTitle>추천 강의자료</SectionTitle>
            <RecommendedResourceBox>
              <NoResource>
                시간표를 작성하지 않았거나 업로드된 강의자료가 없습니다.
              </NoResource>
            </RecommendedResourceBox>
          </DashboardRightTopSection>

          <DashboardRightBottom>
            <RightBottomLeftSection>
              <SectionTitle>내 시간표</SectionTitle>
              <DashboardRightContentBox>
                <NoReourceSection>
                  <NoResource>아직 작성한 시간표가 없습니다.</NoResource>
                  <NoResourceButtonSection>
                    <NoResourceButton>작성하러 가기</NoResourceButton>
                  </NoResourceButtonSection>
                </NoReourceSection>
              </DashboardRightContentBox>
            </RightBottomLeftSection>

            <RightBottomRightSection>
              <SectionTitle>최근 본 강의</SectionTitle>
              <DashboardRightContentBox>
                <NoResource>최근에 본 강의가 없습니다.</NoResource>
              </DashboardRightContentBox>
            </RightBottomRightSection>
          </DashboardRightBottom>
        </DashBoardRight>
      </DashboardSection>
    </Wrapper>
  );
};

export default IndexPage;
