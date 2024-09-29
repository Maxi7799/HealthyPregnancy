import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import leftImage from "../../assets/home-sec.jpg";
// import { Link } from "react-router-dom";
import homeImg from "../../assets/home-main.png";
import { useTranslation } from "react-i18next";
import { Carousel } from "antd";
import { list } from "../service-list/index";

export const HomeMain: React.FC = () => {
  const [t] = useTranslation("global");

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      arrows
      className="my-carousel"
      autoplay
      autoplaySpeed={15 * 1000}
    >
      {list.map((item) => {
        return (
          <div className="home-main">
            <div className="main-text">{item.title}</div>
            {/* <div className="home-welcome">welcome</div> */}
            <div className="home-welcome home-text">{item.text}</div>
            <Link to={item.link}>
              <div className="home-button">{item.buttonText}</div>
            </Link>
            <div
              className="home-main-image"
              style={{
                background: "url(" + item.imgUrl + ") no-repeat center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Carousel>
  );

  // const contentStyle: React.CSSProperties = {
  //   margin: 0,
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  // const

  // return (
  // <>
  {
    /* <div className="home-main">
        <div className="main-text">
          {t("home.hero")}
        </div>
        <div className="home-welcome">welcome</div>
        <div className="home-welcome home-text">
          Complete this short questionnaire to assess your pregnancy health
          risks and receive personalized guidance for a safer, healthier
          pregnancy.
        </div>
        <div className="home-button">
          <Link to="/risk-assessment">Start Risk Assessment</Link>
        </div>
        <div className="home-main-image">
          <img src={homeImg}></img>
        </div>
      </div> */
  }
  // </>
  // );
};
