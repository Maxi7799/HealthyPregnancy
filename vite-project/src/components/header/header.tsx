import "./header.css";
import React from "react";
import { Language } from "./language";

export const Header: React.FC = () => {
  return (
    <div className="header-main">
      <div className="header-left">
        <div className="header-left-text">Healthy</div>
        <div className="header-left-text">Pregnancy</div>
      </div>
      <div className="header-right">
        <div className="header-nav">Home</div>
        <div className="header-nav">Data Insights</div>
        <div className="header-nav">Education</div>
        <div className="header-nav">Nutrition</div>
        <div className="header-nav">Exercise</div>
        <Language />
      </div>
    </div>
  );
};
