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
            {/* <h2>Healthy Pregnancy</h2> */}
          </Link>
        </div>
        <div className="footer-center">
          <div className="footer-column">
            <h3>Our Health</h3>
            <p>Education for Risk Reducing</p>
            <p>Education for food health</p>
            <p>Data Insight Australia</p>
            <p>See if Food Health</p>
            <p>Exercise Instructions</p>
          </div>
          <div className="footer-column">
            <h3>Programs and Projects</h3>
            <p>Identify Healthy Food</p>
            <p>Food nutrition Calculator</p>
            <p>Identify Risky Area</p>
            <p>Check Your Action</p>
          </div>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Privacy Statement</p>
          <p>
            <a href="#terms-of-use" className="clickable">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
