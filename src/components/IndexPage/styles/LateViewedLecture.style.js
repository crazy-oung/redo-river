import styled from "styled-components";

import {
  BorderColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

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
