import styled from "styled-components";

import {
  BorderColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";
import {
  DashboardRightContentBox,
  NoReourceSection,
} from "../../../pages/IndexPage/styles/IndexPage.style";

export const LectureRow = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 62px;

    padding: 12px 16px 11px 16px;
    border-bottom: 1px solid ${BorderColor};
  }
`;

export const LectureList = styled.ul`
  padding: 12px 0;
  width: inherit;

  ${LectureRow}:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 1px 0;
  }
`;

export const ViewedReourceSection = styled(DashboardRightContentBox)`
  @media screen and (max-width: ${MobileViewWidth}) {
    min-height: 120px;
  }
  ​
`;

export const ViewedNoReourceSection = styled(NoReourceSection)`
  padding: 117px 0;

  @media screen and (max-width: ${MobileViewWidth}) {
    padding: 49px 0;
  }
  ​
`;
