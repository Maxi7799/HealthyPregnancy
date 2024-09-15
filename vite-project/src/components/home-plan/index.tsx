import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

import icon1 from './images/1.webp'
import icon2 from './images/2.webp'
import icon3 from './images/3.webp'
import icon4 from './images/4.webp'
import icon5 from './images/5.webp'

type listType = Array<{ text1: string; text2: string; other: string, icon: string }>;

export const HomePlan: React.FC = () => {
  const list: listType = [
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon1,
      other: "Explore previous pregnancy through data insights",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon2,
      other: "Learn essential aspects about being pregnant",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon3,
      other: "Check pregnancy risk through a simple assessment",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon4,
      other: "Get your best nutrition and recipe recommendation",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      icon: icon5,
      other: "Get yourself healthier through exercises",
    },
  ];

  return (
    <>
      <div className="home-plan">
        {list.map((item, index) => {
          return (
            <>
              <div className="plan-box">
                <div className="plan-image" style={{background: "url(" + item.icon + ') no-repeat center center', backgroundSize: 'contain'}}></div>
                <div className="plan-text2">{item.other}</div>
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
