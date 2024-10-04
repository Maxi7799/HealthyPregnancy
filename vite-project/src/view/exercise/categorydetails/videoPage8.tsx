import React, { useRef, useState } from "react";
import "./page.css";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header/header";
import { useTranslation } from "react-i18next";
import { Modal } from "./popupModel";

const videos = ["G9NVRZN_gp4", "7RB9QfY1SkM"];

export const VideoPage8: React.FC = () => {
  const [t] = useTranslation("global");

  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string[];
    benefitsTitle: string;
    benefitsContent: string;
  } | null>(null);

  const openModal = (exercise: number) => {
    switch (exercise) {
      case 1:
        setModalContent({
          title: t("exercise.card-8.exe-1-how-title"),
          content: [
            t("exercise.card-8.exe-1-how-content-1"),
            t("exercise.card-8.exe-1-how-content-2"),
            t("exercise.card-8.exe-1-how-content-3"),
          ],
          benefitsTitle: t("exercise.card-8.exe-1-ben-title"),
          benefitsContent: t("exercise.card-8.exe-1-ben-content"),
        });
        break;
      case 2:
        setModalContent({
          title: t("exercise.card-8.exe-2-how-title"),
          content: [
            t("exercise.card-8.exe-2-how-content-1"),
            t("exercise.card-8.exe-2-how-content-2"),
            t("exercise.card-8.exe-2-how-content-3"),
          ],
          benefitsTitle: t("exercise.card-8.exe-2-ben-title"),
          benefitsContent: t("exercise.card-8.exe-2-ben-content"),
        });
        break;
      default:
        setModalContent(null);
    }
  };

  const closeModal = () => setModalContent(null);

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
        <h1 className="page-title">{t("exercise.card-8.card-title")}</h1>
        <div className="intro-section">
          <div className="intro-image-container">
            <img
              src="https://images.pexels.com/photos/7155523/pexels-photo-7155523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Page Intro"
              className="intro-image"
            />
          </div>
          <div className="intro-text">
            <div className="exercise-content-container">
              {/* Suggested Period Section */}
              <p>
                <strong>{t("exercise.card-8.suggest-period-title")}</strong>
                {t("exercise.card-8.suggest-period-content")}
              </p>

              {/* Description Section */}
              <p>
                <strong>{t("exercise.card-8.desc-title")}</strong>
                {t("exercise.card-8.desc-content")}
              </p>

              {/* Exercises List */}
              <ul>
                <li>
                  <strong>{t("exercise.card-8.exe-1-title")}</strong>
                  {t("exercise.card-8.exe-1-content")}{" "}
                  <a onClick={() => openModal(1)}>
                    {t("exercise.card-8.how-btn")}
                  </a>
                </li>
                <li>
                  <strong>{t("exercise.card-8.exe-2-title")}</strong>
                  {t("exercise.card-8.exe-2-content")}{" "}
                  <a onClick={() => openModal(2)}>
                    {t("exercise.card-8.how-btn")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {modalContent && (
            <Modal
              title={modalContent.title}
              content={modalContent.content}
              benefitsTitle={modalContent.benefitsTitle}
              benefitsContent={modalContent.benefitsContent}
              onClose={closeModal}
            />
          )}
        </div>

        {/* YouTube Slideshow */}
        <div className="video-slideshow">
          <h2>{t("exercise.card-8.video-title")}</h2>
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
