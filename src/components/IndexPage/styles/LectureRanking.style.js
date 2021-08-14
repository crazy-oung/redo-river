import styled from "styled-components";

import {
  MobileViewWidth,
  FontColor,
  BorderColor,
  PrimaryColor,
  NoticeColor,
  PlaceholderColor,
} from "../../../static/Shared/commonStyles";

export const Department = styled.li`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  top: 12px;
  height: 100%;

  border-bottom: 2px solid
    ${({ isPicked }) => (isPicked ? NoticeColor : "none")};

  span {
    position: relative;
    color: ${({ isPicked }) => (isPicked ? PrimaryColor : PlaceholderColor)};
    top: ${({ isPicked }) => (isPicked ? "1px" : "0")};
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: fit-content;
    padding: 0 2px;
    margin: 0 10px;
    border-bottom: 1.5px solid
      ${({ isPicked }) => (isPicked ? NoticeColor : "none")};

    box-sizing: border-box;

    white-space: nowrap;
  }
`;

export const LectureRankingDeptMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 12px;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 44px;
    padding: 0px 4px;
    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export const DepartmentName = styled.span`
  color: ${PlaceholderColor};
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  font-style: normal;
  cursor: pointer;

  :before {
    content: "${({ name }) =>
      name.length > 4
        ? name.split("·")[0][0] + "·" + name.split("·")[1][0]
        : name}";
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    width: max-content;

    font-size: 14px;
    font-weight: normal;
    font-style: normal;

    :before {
      content: "${({ name }) => name}";
    }
  }
`;

export const MenuFocusedOn = styled.div`
  display: block;
  position: relative;
  width: ${({ menuWidth }) => menuWidth};
  height: 2px;

  bottom: 2px;
  left: 7px;
  background-color: ${NoticeColor};

  transition: transform 0.4s ease;
  transform: translateX(${({ location }) => location * (42 + location * 1)}px);

  @media screen and (max-width: ${MobileViewWidth}) {
    width: 26px;
    height: 1px;

    bottom: 1px;
    left: 16px;

    transition: transform 0.4s ease;
    transform: translateX(
      ${({ location }) => location * (42 + location * 1)}px
    );
  }
`;

export const LectureRow = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: 70px;
  padding: 15px 24px 14px 24px;
  border-bottom: 1px solid ${BorderColor};
  cursor: pointer;

  @media screen and (max-width: ${MobileViewWidth}) {
    height: 62px;
    padding: 12px 16px;
  }
`;
export const LectureRankingList = styled.ul`
  min-height: 355px;
  border-top: 1px solid #eeeeee;

  ${LectureRow}:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    margin-top: -1px;
    min-height: 315px;
  }
`;

export const Ranking = styled.span`
  margin: 0px 24px 0px 0px;

  color: ${PrimaryColor};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;

  :before {
    content: "0${({ index }) => index}";
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: auto;
    height: auto;
    margin: 0px 16px 0px 0px;
    color: ${FontColor};
    align-items: center;

    :before {
      content: "${({ index }) => index}";
    }
  }
`;
