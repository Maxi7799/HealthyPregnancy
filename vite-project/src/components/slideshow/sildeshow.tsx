import React, { useState, useEffect } from "react";
import "./slideshow.css";
import edu from "../../assets/edu-back.png";
import exercise from "../../assets/exercise-back.png";
import food from "../../assets/food-back.png";

const Slideshow: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const slides = [
    {
      id: 0,
      title: "01  Pregnancy Risk Education",
      content: {
        topic: "Your Health is Our Focus",
        text: "This is the first slide with some descriptive text.",
        buttonText: "Learn More",
        imgSrc: edu,
      },
    },
    {
      id: 1,
      title: "02 Food Nutrition Benefits",
      content: {
        topic: "Food Matters So Much",
        text: "This is the second slide with some different text.",
        buttonText: "Discover",
        imgSrc: food,
      },
    },
    {
      id: 2,
      title: "03 Exercise For Pregnancy",
      content: {
        topic: "Try To Be More Healthy By Workingout",
        text: "This is the third slide with even more text.",
        buttonText: "Explore",
        imgSrc: exercise,
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFadeIn(true); 
      }, 500); // Duration of fade out
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-tags">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`tag-button ${activeSlide === index ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <div className="slideshow-window">
        <div className={`slide-content ${fadeIn ? "fade-in" : "fade-out"}`}>
          <div className="text-content">
            <h2 className="text-topic">{slides[activeSlide].content.topic}</h2>
            <p className="text-desc">{slides[activeSlide].content.text}</p>
            <button className="slide-button">
              {slides[activeSlide].content.buttonText}
            </button>
          </div>
          <div className="image-content">
            <img
              src={slides[activeSlide].content.imgSrc}
              alt={`Slide ${activeSlide + 1} Image`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
