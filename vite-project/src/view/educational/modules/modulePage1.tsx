import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";

export const ModulePage1: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Australian Healthcare System"
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
          <nav className="module-contents">
            <h3>Contents</h3>
            <ul>
              <li>
                <div
                  className={`accordion-title ${
                    expandedSection === "Australian Healthcare System"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => toggleSection("Australian Healthcare System")}
                >
                  Australian Healthcare System
                  <span
                    className={`arrow ${
                      expandedSection === "Australian Healthcare System"
                        ? "down"
                        : "right"
                    }`}
                  ></span>
                </div>
                {expandedSection === "Australian Healthcare System" && (
                  <ul className="submenu">
                    <li>
                      <a href="#section1">1.1. Topic One</a>
                    </li>
                    <li>
                      <a href="#section2">1.2. Topic Two</a>
                    </li>
                    <li>
                      <a href="#section3">1.3. Topic Three</a>
                    </li>
                    <li>
                      <a href="#quiz">1.4. Knowledge Checker</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/module2">
                  Optimising Pregnancy Care<span className="arrow right"></span>
                </Link>
              </li>
              <li>
                <Link to="/module3">
                  Common Health Risks<span className="arrow right"></span>
                </Link>
              </li>
              <li>
                <Link to="/module4">
                  Nutritional Advice<span className="arrow right"></span>
                </Link>
              </li>
              <li>
                <Link to="/module5">
                  Exercise and Physical Activity
                  <span className="arrow right"></span>
                </Link>
              </li>
              <li>
                <Link to="/module6">
                  Birth Preparation<span className="arrow right"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="module-content">
          <h2>Module Title</h2>

          <section id="section1">
            <h3>1.1. Topic One</h3>
            <p>Content for Topic One...</p>
            <a href="#section1-more">More Details...</a>
          </section>

          <section id="section2">
            <h3>1.2. Topic Two</h3>
            <p>Content for Topic Two...</p>
            <a href="#section2-more">More Details...</a>
          </section>

          <section id="section3">
            <h3>1.3. Topic Three</h3>
            <p>Content for Topic Three...</p>
            <a href="#section3-more">More Details...</a>
          </section>

          <section id="quiz">
            <h3>1.4. Knowledge Checker</h3>
            <p>Quiz questions go here...</p>
          </section>

          <div className="navigation-buttons">
            <button className="prev-button">Previous Chapter</button>
            <button className="next-button">Next Chapter</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
