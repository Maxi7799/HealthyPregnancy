import React, { useRef } from "react";
import "./page.css";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header/header";

const videos = ["dQw4w9WgXcQ", "tVj0ZTS4WF4", "QH2-TGUlwu4", "9bZkp7q19f0"];

export const VideoPage1: React.FC = () => {
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
        <h1 className="page-title">Welcome to Our Educational Page</h1>
        <div className="intro-section">
          <div className="intro-image-container">
            <img
              src="https://media.istockphoto.com/id/1366052585/photo/shot-of-a-group-of-friends-hanging-out-before-working-out-together.jpg?s=1024x1024&w=is&k=20&c=XFaueoiQkP6_pXOhKbUCeDb28u6dc4ABhLkP_WKngn4="
              alt="Page Intro"
              className="intro-image"
            />
          </div>
          <div className="intro-text">
            <p>
              This page offers insightful information on various topics related
              to health, wellness, and more. We aim to provide valuable content
              that helps you understand important aspects of life and how to
              take care of yourself.
            </p>
            <p>
              Our goal is to deliver accurate and up-to-date information through
              engaging articles, helpful videos, and interactive content. Browse
              through the sections to learn more.
            </p>
          </div>
        </div>

        {/* YouTube Slideshow */}
        <div className="video-slideshow">
          <h2>Featured Videos</h2>
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