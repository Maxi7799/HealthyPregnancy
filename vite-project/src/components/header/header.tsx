import "./header.css";
import React from "react";
import { Language } from "./language";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="header-main">
      <div className="header-left">
        <div className="header-left-text">Healthy</div>
        <div className="header-left-text">Pregnancy</div>
      </div>
      <div className="header-right">
        <div className="header-nav">
          <Link to="/home">Home</Link>
        </div>
        <div className="header-nav">Data Insights</div>
        <div className="header-nav">Education</div>
        <div className="header-nav">
          Risk Assessment
          {/* <Link to="/risk-assessment">Risk Assessment</Link> */}
        </div>

        <div className="header-nav">Nutrition</div>
        <div className="header-nav">Exercise</div>
        <Language />
      </div>
    </div>
  );
};
