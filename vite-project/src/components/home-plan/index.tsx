import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

type listType = Array<{ text1: string; text2: string; other: string }>;

export const HomePlan: React.FC = () => {
  const list: listType = [
    {
      text1: "ICON/",
      text2: "IMAGE",
      other: "Explore previous pregnancy through data insights",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      other: "Learn essential aspects about being pregnant",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      other: "Check pregnancy risk through a simple assessment",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
      other: "Get your best nutrition and recipe recommendation",
    },
    {
      text1: "ICON/",
      text2: "IMAGE",
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
                <div className="plan-image"></div>
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
