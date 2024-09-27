import "./header.css";
import React, { useState } from "react";
import { Language } from "./language";
import { Link } from "react-router-dom";
import icon from "../../assets/h-icon.png";
import { Tooltip } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
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
              <div>Healthy</div>
              <div>Pregnancy</div>
            </div>
          </div>
        </Link>
        <MenuOutlined className="hamburger-menu" onClick={toggleMenu} />
      </div>
      <div className={`header-right ${menuOpen ? "show" : ""}`}>
        <div className="header-nav">
          <Link to="/home">Home</Link>
        </div>
        <div className="header-nav">
          <Link to="/educational">Education</Link>
        </div>
        <div className="header-nav">
          <Link to="/risk-assessment">Risk Assessment</Link>
        </div>

        <Tooltip placement="bottom" color="#fff" title={NutritionList}>
          <div className="header-nav">
            <Link to="/nutrition-analysis">Nutrition</Link>
          </div>
        </Tooltip>
        <div className="header-nav">
          <Link to="/exercise">Exercise</Link>
        </div>
        <Language />
      </div>
    </div>
  );
};

const NutritionList = () => {
  return (
    <div style={{ color: "#000" }}>
      <div className="Nutrition-row">
        <Link to="/nutrition-analysis?actTab=0">Nutrition Analysis</Link>
      </div>
      <div className="Nutrition-row">
        <Link to="/nutrition-analysis?actTab=1">Recommendation</Link>
      </div>
      <div className="Nutrition-row">
        <Link to="/recipe">Recipes</Link>
      </div>
    </div>
  );
};
