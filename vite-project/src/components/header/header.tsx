import "./header.css";
import React, { useState } from "react";
import { Language } from "./language";
import { Link } from "react-router-dom";
import icon from "../../assets/h-icon.png";
import { Tooltip } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";


export const Header: React.FC = () => {
  const [t] = useTranslation("global");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-main">
      <div className="header-left">
        <Link to="/home" className="icon-link">
          <div className="icon-main">
            <div className="i-left">
              <img className="i-icon" src={icon} alt="Healthy Pregnancy Logo" />
            </div>
            <div className="i-right">
              <div>{t("header.icon-top")}</div>
              <div>{t("header.icon-bottom")}</div>
            </div>
          </div>
        </Link>
        <MenuOutlined className="hamburger-menu" onClick={toggleMenu} />
      </div>
      <div className={`header-right ${menuOpen ? "show" : ""}`}>
        <div className="header-nav">
          <Link to="/home">{t("header.navbar-1")}</Link>
        </div>
        <div className="header-nav">
          <Link to="/educational">{t("header.navbar-2")}</Link>
        </div>
        <div className="header-nav">
          <Link to="/risk-assessment">{t("header.navbar-3")}</Link>
        </div>

        <Tooltip placement="bottom" color="#fff" title={NutritionList}>
          <div className="header-nav">
            <Link to="/nutrition-analysis">{t("header.navbar-4")}</Link>
          </div>
        </Tooltip>
        <Tooltip placement="bottom" color="#fff" title={ExerciseList}>
          <div className="header-nav">
            <Link to="/exercise">{t("header.navbar-5")}</Link>
          </div>
        </Tooltip>
        <Language />
      </div>
    </div>
  );
};

const NutritionList = () => {
  const [t] = useTranslation("global");
  return (
    <div style={{ color: "#000" }}>
      <div className="Nutrition-row">
        <Link to="/nutrition-analysis?actTab=0">{t("header.navbar-4-1")}</Link>
      </div>
      <div className="Nutrition-row">
        <Link to="/nutrition-analysis?actTab=1">{t("header.navbar-4-2")}</Link>
      </div>
      <div className="Nutrition-row">
        <Link to="/recipe">{t("header.navbar-4-3")}</Link>
      </div>
    </div>
  );
};

const ExerciseList = () => {
  const [t] = useTranslation("global");
  return (
    <div style={{ color: "#000" }}>
      <div className="Nutrition-row">
        <Link to="/exercise">{t("header.navbar-5-1")}</Link>
      </div>
      {/* <div className="Nutrition-row">
        <Link to="/healthyquestionnari">{t("header.navbar-5-2")}</Link>
      </div> */}
      <div className="Nutrition-row">
        <Link to="/postpartumexercise">{t("header.navbar-5-3")}</Link>
      </div>
    </div>
  );
};
