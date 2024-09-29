import React from "react";
import ModuleCard from "./moduleCard";
import pre_img1 from "../../assets/pregnant1.jpg";
import pre_img2 from "../../assets/pregnant2.jpg";
import pre_img3 from "../../assets/pregnant3.jpg";
import pre_img4 from "../../assets/pregnant4.jpg";
import pre_img5 from "../../assets/pregnant5.jpg";
import pre_img6 from "../../assets/pregnant6.jpg";
import "./index.css";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    imageSrc: pre_img1,
    title: "Health Risk",
    path: "/module1",
  },
  { imageSrc: pre_img2, title: "Antenatal Visits", path: "/module2" },
  { imageSrc: pre_img3, title: "Birth Methods", path: "/module3" },
  { imageSrc: pre_img4, title: "Nutrition", path: "/module4" },
  {
    imageSrc: pre_img5,
    title: "Prenatal Exercises",
    path: "/module5",
  },
  { imageSrc: pre_img6, title: "Postpartum Exercises", path: "/module6" },
];

export const PregnancyEducation: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="pregnancy-education">
      <div className="pregnancy-education__text">
        <h1>Pregnancy Education</h1>
        <hr className="title-divider" />
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
            onClick={() => handleCardClick(module.path)}
          />
        ))}
      </div>
    </div>
  );
};
