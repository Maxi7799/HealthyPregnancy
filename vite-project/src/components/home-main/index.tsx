import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import leftImage from "../../assets/home-sec.jpg";
// import { Link } from "react-router-dom";
import homeImg from "../../assets/home-main.png";
import { useTranslation } from "react-i18next";

export const HomeMain: React.FC = () => {

  const [t] = useTranslation("global");

  return (
    <>
      <div className="home-main">
        <div className="main-text">
          {/* Pregnancy Health Risk Assessment Questionnaire */}
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
      </div>
    </>
  );
};
