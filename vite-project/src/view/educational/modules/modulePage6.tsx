import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";


export const ModulePage6: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Birth Preparation"
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <Header />
      <div className="module-page">
        <aside className="module-sidebar">
          <Link to="/educational" className="back-button">
            Back to Modules
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>Contents</h3>
              <ul>
                <li>
                  <Link to="/module1" className="accordion-link">
                    Australian Healthcare System
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module2" className="accordion-link">
                    Optimising Pregnancy Care
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module3" className="accordion-link">
                    Common Health Risks
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module4" className="accordion-link">
                    Nutritional Advice
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module5" className="accordion-link">
                    Exercise and Physical Activity
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Birth Preparation" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Birth Preparation")}
                  >
                    Birth Preparation
                    <span
                      className={`arrow ${
                        expandedSection === "Birth Preparation"
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Birth Preparation" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          1.1. Topic One
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          1.2. Topic Two
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          1.3. Topic Three
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          1.4. Knowledge Checker
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="module-content">
          <h2>1. Module Title</h2>

          <section id="section1">
            <h3>1.1. Topic One</h3>
            <p>Content for Topic One...</p>
            <a href="#section1-more" className="details-link">
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>1.2. Topic Two</h3>
            <p>Content for Topic Two...</p>
            <a href="#section2-more" className="details-link">
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>1.3. Topic Three</h3>
            <p>Content for Topic Three...</p>
            <a href="#section3-more" className="details-link">
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>1.4. Knowledge Checker</h3>
            <p>Quiz questions go here...</p>
          </section>

          <div className="navigation-buttons">
            <Link to="/module5">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module6">
              <button className="next-button">Next Chapter</button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
