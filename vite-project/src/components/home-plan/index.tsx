import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

import icon1 from './images/1.webp'
import icon2 from './images/2.webp'
import icon3 from './images/3.webp'
import icon4 from './images/4.webp'
import icon5 from './images/5.webp'

import { useTranslation } from "react-i18next";

type listType = Array<{ text1: string; text2: string; other: string, icon: string, link: string }>;

export const HomePlan: React.FC = () => {

  const [t] = useTranslation("global");
  const list: listType = [
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon2,
      other: t("home.roadmap.icon-2-desc"),
      link: "/educational",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon3,
      other: t("home.roadmap.icon-3-desc"),
      link: "/risk-assessment",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon4,
      other: t("home.roadmap.icon-4-desc"),
      link: "/nutrition-analysis",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon5,
      other: t("home.roadmap.icon-5-desc"),
      link: "/exercise",
    },
  ];

  return (
    <>
      <div className="home-plan">
        {list.map((item, index) => {
          return (
            <>
              <div className="plan-box">
                <a href={item.link}>
                  <div
                    className="plan-image"
                    style={{
                      background:
                        "url(" + item.icon + ") no-repeat center center",
                      backgroundSize: "contain",
                    }}
                  ></div>
                </a>
                <a href={item.link}>
                  <div className="plan-text2">{item.other}</div>
                </a>
              </div>
              <div className="plan-arrow">
                {index + 1 != list.length ? <ArrowRightOutlined /> : <></>}
              </div>
            </>
          );
        })}
        <div></div>
      </div>
    </>
  );
};
