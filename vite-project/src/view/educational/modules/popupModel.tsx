import React from "react";
import "./popupModel.css";

export const Modal: React.FC<{
  title: string;
  pdfUrl: string;
  onClose: () => void;
  footer?: React.ReactNode;
}> = ({ title, pdfUrl, onClose, footer }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <div className="modal-content">
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            style={{ border: "none" }}
            title={title}
          ></iframe>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};
