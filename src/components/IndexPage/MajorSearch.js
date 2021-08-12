import React from "react";

import { SectionTitle } from "../../pages/IndexPage/styles/IndexPage.style";
import {
  MajorSearchContent,
  MajorSearchContentList,
  MajorShortcut,
  MajorCard,
} from "./styles/MajorSearch.style";

import MajorArray from "../../static/IndexPage/majorArray";

const LectureRanking = () => {
  return (
    <>
      <SectionTitle>학부별 탐색</SectionTitle>
      <MajorSearchContent>
        <MajorSearchContentList>
          {MajorArray.map(({ src, label, value }, index) => (
            <MajorShortcut key={label}>
              <MajorCard
                img={src}
                name={value}
                index={index}
                onClick={() => {
                  alert(index + ", " + value);
                }}
                to="/lectures"
              ></MajorCard>
            </MajorShortcut>
          ))}
        </MajorSearchContentList>
      </MajorSearchContent>
    </>
  );
};

export default LectureRanking;
