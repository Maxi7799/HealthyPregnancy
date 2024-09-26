import React from "react";

type ModuleCardProps = {
  imageSrc: string;
  title: string;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="module-card">
      <img src={imageSrc} alt={title} className="module-card__image" />
      <div className="module-card__title">{title}</div>
    </div>
  );
};

export default ModuleCard;
