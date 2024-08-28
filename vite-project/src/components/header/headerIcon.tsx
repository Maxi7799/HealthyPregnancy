import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import icon from "../../assets/h-icon.png";

export const HeaderIcon: React.FC = () => {
  return (
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
  );
};
