import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

import img1 from "../../assets/unsplash_7tGqLzHcjZ8.png";
import img2 from "../../assets/unsplash_076XLvcgeDk.png";
import img3 from "../../assets/unsplash_7ztiEagrkYk.png";
import img4 from "../../assets/unsplash_ZSjQakwNsuE (1).png";

type listType = Array<{
  title: string;
  text: string;
  buttonText: string;
  imgUrl: string;
  link: string;
}>;

export const ServiceList: React.FC = () => {
  const list: listType = [
    {
      title: "Pregnancy Data Insights",
      text: "Explore previous pregnancy experience through data for your better pregnancy.",
      buttonText: "Explore",
      imgUrl: img1,
      link: "/datainsight",
    },
    {
      title: "Know More about Pregnancy",
      text: "Leverage your knowledge on pregnancy through interactive modules.",
      buttonText: "Learn More",
      imgUrl: img2,
      link: "/educational",
    },
    {
      title: "Find your Best Nutritional Advice",
      text: "Find your recommended nutrition during your pregnancy and generate your own recipes.",
      buttonText: "Explore",
      imgUrl: img3,
      link: "/nutrition-analysis",
    },
    {
      title: "Get Healthier through Exercises",
      text: "Get yourself a healthier pregnancy through exercises for pregnant women.",
      buttonText: "Explore",
      imgUrl: img4,
      link: "",
    },
  ];

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
