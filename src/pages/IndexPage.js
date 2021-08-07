import React from "react";
import {
  Wrapper,
  BannerSection,
  BannerImg,
  SubjectBold,
  SubjectNormal,
  SubjectSection,
  MajorSearchContent,
  MajorSearchContentBox,
  SectionTitle,
  MajorShortcut,
  MajorName,
  MajorSearchSection,
  LectureRankingSection,
  Department,
  DepartmentName,
  LectureList,
  LectureRow,
  Professor,
  Ranking,
  Rating,
  LectureTitle,
  TitleProfessorWrapper,
  LectureRankingDeptMenu,
  DashboardSection,
  DashboardLeftSection,
  DashBoardRightSection,
  DashboardRightTop,
  NoResource,
  RecommendedResource,
} from "./styles/IndexPage.style";

import MajorArray from "../static/IndexPage/majorArray";
/**
 * TODO:
 * - [ ] 컴포넌트 분리
 * - [ ] 스타일 코드 분리
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
  return (
    <Wrapper>
      <BannerSection>
        <SubjectSection>
          <SubjectNormal>솔직한 강의평을 원한다면?</SubjectNormal>
          <SubjectBold>가자, 한강으로!</SubjectBold>
        </SubjectSection>
        <BannerImg />
      </BannerSection>

      <MajorSearchSection>
        <SectionTitle>학부별 탐색</SectionTitle>
        <MajorSearchContent>
          <MajorSearchContentBox>
            {MajorArray.map(({ src, label, value }) => (
              <MajorShortcut
                key={label}
                onClick={() => {
                  alert(value);
                }}
                img={src}
              >
                <MajorName>{label}</MajorName>
              </MajorShortcut>
            ))}
          </MajorSearchContentBox>
        </MajorSearchContent>
      </MajorSearchSection>

      <DashboardSection>
        <DashboardLeftSection>
          <SectionTitle>강의랭킹</SectionTitle>
          <LectureRankingSection>
            <LectureRankingDeptMenu>
              {MajorArray.map(({ label, value }) => (
                <Department key={label}>
                  <DepartmentName>{label}</DepartmentName>
                </Department>
              ))}
            </LectureRankingDeptMenu>

            <LectureList>
              {displayLectures.result.map(
                ({ id, name, professor, total_rating }, index) => (
                  <LectureRow key={index}>
                    {/*  FIXME: 모바일 화면에서 한자리수로 출력 되도록 고칠 것 */}
                    <Ranking index={++index}>
                      {`${++index}`.padStart(2, "0")}
                    </Ranking>
                    <TitleProfessorWrapper>
                      <LectureTitle>{name}</LectureTitle>
                      <Professor>{professor}</Professor>
                    </TitleProfessorWrapper>
                    <Rating>{total_rating.toFixed(1)}</Rating>
                  </LectureRow>
                )
              )}
            </LectureList>
          </LectureRankingSection>
        </DashboardLeftSection>

        <DashBoardRightSection>
          <DashboardRightTop>
            <SectionTitle>추천 강의자료</SectionTitle>
            <RecommendedResource>
              <NoResource>
                시간표를 작성하지 않았거나 업로드된 강의자료가 없습니다.
              </NoResource>
            </RecommendedResource>
          </DashboardRightTop>
        </DashBoardRightSection>
      </DashboardSection>
    </Wrapper>
  );
};

export default IndexPage;
