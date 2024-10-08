import React, { useRef } from "react";
import "./videoModule.css";
import { Footer } from "../../../../components/footer";
import { Header } from "../../../../components/header/header";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const videos = ["6pDr_nxLTIY", "R91023CV62M"];

export const VideoModule6: React.FC = () => {
  const [t] = useTranslation("global");

  const videoContainerRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number = 0;
  let scrollLeft: number = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = videoContainerRef.current;
    if (container) {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = videoContainerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // The multiplier controls the scroll speed
      container.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <h1 className="page-title">{t("postpartum.card-6-title")}</h1>
        <div className="intro-section">
          <div className="intro-image-container">
            <img
              src="https://images.pexels.com/photos/18087454/pexels-photo-18087454/free-photo-of-women-exercising-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Page Intro"
              className="intro-image"
            />
          </div>
          <div className="intro-text">
            <div className="exercise-info">
              <ul>
                <li>
                  <strong>{t("postpartum.card-6-condition-title")}</strong>
                  {t("postpartum.card-6-condition-desc")}
                </li>
                <li>
                  <h3>{t("postpartum.card-6-exe-title")}</h3>
                  <ul>
                    <li>
                      <strong>{t("postpartum.card-6-exe-1-title")}</strong>
                      {t("postpartum.card-6-exe-1-content")}
                    </li>
                    <li>
                      <strong>{t("postpartum.card-6-exe-2-title")}</strong>
                      {t("postpartum.card-6-exe-2-content")}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/postpartumexercise" className="back-button">
                {t("education.sidebar.back-btn")}
              </Link>
            </div>
          </div>
        </div>
        {/* YouTube Slideshow */}
        <div className="video-slideshow">
          <h2>{t("exercise.card-1.video-title")}</h2>
          <div
            className="video-container"
            ref={videoContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {videos.map((videoId, index) => (
              <div key={index} className="video-item">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
