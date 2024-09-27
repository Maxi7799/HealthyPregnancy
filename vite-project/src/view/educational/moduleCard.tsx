import React from "react";

interface ModuleCardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  imageSrc,
  title,
  onClick,
}) => {
  return (
    <div className="module-card" onClick={onClick}>
      <img src={imageSrc} alt={title} className="module-card__image" />
      <div className="module-card__title">{title}</div>
    </div>
  );
};

export default ModuleCard;
