import React from "react";

import {
  SectionTitle,
  NoResource,
} from "../../pages/IndexPage/styles/IndexPage.style";
import {
  RecommendedResourceBox,
  ResourceContentList,
  ResoruceContent,
  ResourceShortcut,
  ResourceCard,
} from "./styles/RecommendedResource.style";

const RecommendedResource = ({ resourceList = [] }) => {
  return (
    <>
      <SectionTitle>추천 강의자료</SectionTitle>
      <RecommendedResourceBox isEmpty={resourceList.length === 0}>
        {resourceList.length !== 0 ? (
          <ResoruceContent>
            <ResourceContentList>
              {resourceList.map(
                ({ id, title, lecture, thumbnail, content }, index) => (
                  <ResourceShortcut key={id}>
                    <ResourceCard
                      img={thumbnail}
                      title={title}
                      index={index}
                      onClick={() => {
                        alert(index + ", " + content);
                      }}
                      to="/#"
                    ></ResourceCard>
                  </ResourceShortcut>
                )
              )}
            </ResourceContentList>
          </ResoruceContent>
        ) : (
          <NoResource>
            시간표를 작성지 않았거나 업로드된 강의자료가 없습니다.
          </NoResource>
        )}
      </RecommendedResourceBox>
    </>
  );
};

export default RecommendedResource;
