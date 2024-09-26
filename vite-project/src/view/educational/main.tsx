import React from "react";
import ModuleCard from "./moduleCard";
import pre_img1 from "../../assets/pregnant1.jpg";
import pre_img2 from "../../assets/pregnant2.jpg";
import pre_img3 from "../../assets/pregnant3.jpg";
import pre_img4 from "../../assets/pregnant4.jpg";
import pre_img5 from "../../assets/pregnant5.jpg";
import pre_img6 from "../../assets/pregnant6.jpg";
import "./index.css"


const modules = [
  { imageSrc: pre_img1, title: "Australian Healthcare System" },
  { imageSrc: pre_img2, title: "Optimising Pregnancy Care" },
  { imageSrc: pre_img3, title: "Common Health Risks" },
  { imageSrc: pre_img4, title: "Nutritional Advice" },
  { imageSrc: pre_img5, title: "Exercise and Physical Activity" },
  { imageSrc:pre_img6,  title: "Birth Preparation" },
];

export const PregnancyEducation: React.FC = () => {
  return (
    <div className="pregnancy-education">
      <div className="pregnancy-education__text">
        <h1>Pregnancy Education</h1>
        <hr className="title-divider"></hr>
        <p>
          Whether you are planning to or currently pregnant, let’s leverage your
          knowledge on pregnancy through these interactive modules to achieve
          your best pregnancy experience.
        </p>
        <p>
          At the end of each chapter, try to check your understanding through a
          Knowledge Checker.
        </p>
        <p>
          <strong>Have fun!</strong>
        </p>
      </div>
      <div className="pregnancy-education__grid">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            imageSrc={module.imageSrc}
            title={module.title}
          />
        ))}
      </div>
    </div>
  );
};

