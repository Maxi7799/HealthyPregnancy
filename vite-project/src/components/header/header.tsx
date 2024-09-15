import "./header.css";
import React from "react";
import { Language } from "./language";
import { Link } from "react-router-dom";
import icon from "../../assets/f-icon.png";
import { HeaderIcon } from "./headerIcon";

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
        <div className="header-nav"><Link to="/datainsight">Data Insights</Link></div>
        <div className="header-nav"><Link to="/educational">Education</Link></div>
        <div className="header-nav">
          {/* Risk Assessment */}
          <Link to="/risk-assessment">Risk Assessment</Link>
        </div>

        <div className="header-nav"> <Link to="/nutrition-analysis">Nutrition</Link></div>
        {/* <div className="header-nav">Exercise</div> */}
        {/* <Language /> */}
      </div>
    </div>
  );
};
