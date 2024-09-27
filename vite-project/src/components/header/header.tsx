import "./header.css";
import React from "react";
import { Language } from "./language";
import { Link } from "react-router-dom";
import { HeaderIcon } from "./headerIcon";
import { Tooltip } from "antd";

export const Header: React.FC = () => {
  return (
    <div className="header-main">
      <div className="header-left">
        {/* <div className="header-icon" style={{ background: "url(" + icon + ") no-repeat center center", backgroundSize: "contain" }}>
        </div>
        <div>
          <div className="header-left-text">Healthy</div>
          <div className="header-left-text">Pregnancy</div>
        </div> */}
        <HeaderIcon />
      </div>
      <div className="header-right">
        <div className="header-nav">
          <Link to="/home">Home</Link>
        </div>
        <div className="header-nav">
          <Link to="/datainsight">Data Insights</Link>
        </div>
        <div className="header-nav">
          <Link to="/educational">Education</Link>
        </div>
        <div className="header-nav">
          {/* Risk Assessment */}
          <Link to="/risk-assessment">Risk Assessment</Link>
        </div>

        <Tooltip placement="bottom" color="#fff" title={NutritionList}>
          <div className="header-nav">
            <Link to="/nutrition-analysis">Nutrition</Link>
          </div>
        </Tooltip>

        {/* <div className="header-nav">Exercise</div> */}
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
