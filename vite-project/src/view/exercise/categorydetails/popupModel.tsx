import React from "react";
import "./model.css";

type ModalProps = {
  title: string;
  content: string[];
  benefitsTitle: string;
  benefitsContent: string;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  benefitsTitle,
  benefitsContent,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>{benefitsTitle}</strong> {benefitsContent}
        </p>
      </div>
    </div>
  );
};
