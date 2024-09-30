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
import { useTranslation } from "react-i18next";

const generateModules = () => {
  const [t] = useTranslation("global");

  const modules = [
    {
      imageSrc: pre_img1,
      title: t("education.home.card-1"),
      path: "/module1",
    },
    { imageSrc: pre_img2, title: t("education.home.card-2"), path: "/module2" },
    { imageSrc: pre_img4, title: t("education.home.card-3"), path: "/module3" },
    { imageSrc: pre_img5, title: t("education.home.card-4"), path: "/module4" },
    {
      imageSrc: pre_img3,
      title: t("education.home.card-5"),
      path: "/module5",
    },
    { imageSrc: pre_img6, title: t("education.home.card-6"), path: "/module6" },
  ];
  return modules;
};

export const PregnancyEducation: React.FC = () => {
  const [t] = useTranslation("global");
  const modules = generateModules();
  
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="pregnancy-education">
      <div className="pregnancy-education__text">
        <h1>{t("education.home.title")}</h1>
        <hr className="title-divider" />
        <p>{t("education.home.text-1")}</p>
        <p>{t("education.home.text-2")}</p>
        <p>
          <strong>{t("education.home.text-3")}</strong>
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
