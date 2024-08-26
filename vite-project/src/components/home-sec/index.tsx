import React from "react";
import "./index.css";
import leftImage from "../../assets/home-sec.jpg";
import { Link } from "react-router-dom";

export const HomeSec: React.FC = () => {
  return (
    <div className="vertical-image-section">
      <div className="image-container">
        <img src={leftImage} alt="Descriptive Alt Text" />
      </div>
      <div className="content-container">
        <h2>Data Insights of Pregnancy Risks</h2>
        <p>
          This section provides essential information for new immigrants in
          Australia about pregnancy and childbirth. Here, you will find various
          charts that offer insights into the risks of pregnancy-induced
          conditions, the timing of prenatal care, common childbirth methods,
          and reasons for choosing cesarean sections. These visual tools are
          designed to help you understand different aspects of pregnancy and
          make informed decisions that best suit your needs and circumstances.
        </p>
        <p></p>
        <div className="buttons-container">
          <Link to="/datainsight" className="primary-button">
            Learn more about this data
          </Link>
          {/* <button className="secondary-button">Open call for papers</button> */}
        </div>
      </div>
    </div>
  );
};

