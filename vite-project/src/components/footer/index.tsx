import React from "react";
import "./index.css";
import icon from "../../assets/f-icon.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const [t] = useTranslation("global")
  
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
            <div>{t("footer.icon-top")}</div>
            <div>{t("footer.icon-bottom")}</div>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-one">{t("footer.contents-title")}</div>
          <Link to="/educational" className="footer-item-other">
            {t("footer.content-1")}
          </Link>
          <Link to="/risk-assessment" className="footer-item-other">
            {t("footer.content-2")}
          </Link>
          <Link to="/nutrition-analysis" className="footer-item-other">
            {t("footer.content-3")}
          </Link>
          <Link to="/home" className="footer-item-other">
            {t("footer.content-4")}
          </Link>
        </div>
      </div>

      <div className="footer-bottom">{t("footer.copyright")}</div>
    </footer>
  );
};
