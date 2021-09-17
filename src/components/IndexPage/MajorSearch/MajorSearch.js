import {
  MajorCard,
  MajorSearchContent,
  MajorSearchContentList,
  MajorShortcut,
} from "./MajorSearch.style";

import MajorArray from "../../../static/IndexPage/majorArray";
import React from "react";
import { SectionTitle } from "../../../pages/IndexPage/styles/IndexPage.style";

const LectureRanking = () => {
  function notify(index, name) {
    // 브라우저 지원 여부 체크
    if (!("Notification" in window)) {
      alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
    }
    // 데스크탑 알림 권한 요청
    Notification.requestPermission(function (result) {
      // 권한 거절
      if (result === "denied") {
        alert(
          "알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다."
        );
        return false;
      }
      if (Notification.permission !== "denied") {
        Notification.requestPermission((permission) => {
          if (permission === "granted") {
            var notification = new Notification("한강 Hangang", {
              icon: "/assets/image/logo/hangang-logo-simple.png",
              body: `[${index} ${name}] 한강 알림 테스트입니다.`,
            });

            notification.onclick = () => {
              window.open("/");
            };

            // 3초뒤 알람 닫기
            setTimeout(function () {
              notification.close();
            }, 3 * 1000);
          } else {
            alert("Notification denied");
          }
        });
      }
    });
  }
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
                  notify(index, value);
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
