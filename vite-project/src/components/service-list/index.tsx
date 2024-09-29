import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

import img1 from "../../assets/unsplash_7tGqLzHcjZ8.png";
import img2 from "../../assets/unsplash_076XLvcgeDk.png";
import img3 from "../../assets/unsplash_7ztiEagrkYk.png";
import img4 from "../../assets/unsplash_ZSjQakwNsuE.png";

type listType = Array<{
  title: string;
  text: string;
  buttonText: string;
  imgUrl: string;
  link: string;
}>;

export const list: listType = [
  {
    title: "Education",
    text: "Learn more about prgnancy and Leverage your knowledge on pregnancy through interactive modules.",
    buttonText: "Explore",
    imgUrl: img1,
    link: "/educational",
  },
  {
    title: "Risk Assessment",
    text: "Check pregnancy risk through a simple assessment.Get a quick assessment by answering a few questions.",
    buttonText: "Learn More",
    imgUrl: img2,
    link: "/risk-assessment",
  },
  {
    title: "Nutrition",
    text: "Get analysis, recommendation about nutritions and build up your own schedule by and recipes.",
    buttonText: "Explore",
    imgUrl: img3,
    link: "/nutrition-analysis",
  },
  {
    title: "Exercise",
    text: "Learn more about exercises during pregnancy and get yourself healthier through exercises.",
    buttonText: "Explore",
    imgUrl: img4,
    link: "/exercise",
  },
];

export const ServiceList: React.FC = () => {
  return (
    <>
      <div className="service-item">
        {list.map((item, index) => {
          return (
            <div
              className="service-list"
              style={{ flexDirection: index % 2 == 0 ? "row" : "row-reverse" }}
            >
              <div className="imageBox">
                <img src={item.imgUrl} alt="" />
              </div>
              <div
                className="textBox"
                style={{
                  paddingLeft: index % 2 == 0 ? "10vw" : "row-reverse",
                  paddingRight: index % 2 == 0 ? "0" : "10vw",
                }}
              >
                <div className="service-header">{item.title}</div>
                <div className="service-text">{item.text}</div>
                <div className="service-button">
                  <Link
                    style={{ color: "#fff" }}
                    to={item.link}
                    className="primary-button"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
