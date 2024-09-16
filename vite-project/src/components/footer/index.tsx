import React from "react";
import "./index.css";
import icon from "../../assets/f-icon.png";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link to="/home" className="icon-link">
            <img
              src={icon}
              alt="Healthy Pregnancy Logo"
              className="footer-logo"
            />
          </Link>
          <div>
            <div>Healthy</div>
            <div>Pregnancy</div>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-one">Our Service</div>
          <Link to="/dataInsight" className="footer-item-other">
            Data Insights
          </Link>
          <Link to="/educational" className="footer-item-other">
            Pregnancy Education
          </Link>
          <Link to="/risk-assessment" className="footer-item-other">
            Risk Assessment
          </Link>
          <Link to="/nutrition-analysis" className="footer-item-other">
            Nutritional Advice
          </Link>
          <Link to="/home" className="footer-item-other">
            Pregnancy Exercises
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2024 Powered by HealthyPregnancy
      </div>
    </footer>
  );
};
