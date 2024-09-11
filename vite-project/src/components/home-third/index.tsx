import React from "react";
import "./index.css";
import rightImage from "../../assets/home-third.jpg";
import { Link } from "react-router-dom";

export const HomeThird: React.FC = () => {
  return (
    <div className="right-image-section">
      <div className="content-container">
        <h2>Futher Services</h2>
        <p>
          futher services
        </p>
        <div className="buttons-container">
          <Link to="/educational" className="primary-button">
            Learn more about pregnancy education
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img src={rightImage} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
};
