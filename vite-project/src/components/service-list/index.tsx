import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";

import img1 from "../../assets/unsplash_7tGqLzHcjZ8.png";
import img2 from "../../assets/unsplash_076XLvcgeDk.png";
import img3 from "../../assets/unsplash_7ztiEagrkYk.png";
import img4 from "../../assets/unsplash_ZSjQakwNsuE.png";
import { useTranslation } from "react-i18next";

type listType = Array<{
  title: string;
  text: string;
  buttonText: string;
  imgUrl: string;
  link: string;
}>;

export const generateList = () => {
  const [t] = useTranslation("global");

  const list: listType = [
    {
      title: t("home.slideshow.page-1"),
      text: t("home.slideshow.page-1-text-2"),
      buttonText: t("home.slideshow.page-1-button"),
      imgUrl: img1,
      link: "/educational",
    },
    {
      title: t("home.slideshow.page-2"),
      text: t("home.slideshow.page-2-text-2"),
      buttonText: t("home.slideshow.page-2-button"),
      imgUrl: img2,
      link: "/risk-assessment",
    },
    {
      title: t("home.slideshow.page-3"),
      text: t("home.slideshow.page-3-text-2"),
      buttonText: t("home.slideshow.page-3-button"),
      imgUrl: img3,
      link: "/nutrition-analysis",
    },
    {
      title: t("home.slideshow.page-4"),
      text: t("home.slideshow.page-4-text-2"),
      buttonText: t("home.slideshow.page-4-button"),
      imgUrl: img4,
      link: "/exercise",
    },
  ];
  return list;

}


export const ServiceList: React.FC = () => {
  const list = generateList()
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
