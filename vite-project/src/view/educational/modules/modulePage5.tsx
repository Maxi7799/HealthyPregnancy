import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";

export const ModulePage5: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Prenatal Exercises "
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const [modalContent, setModalContent] = useState<{
    title: string;
    pdfUrl: string;
  } | null>(null);

  const openModal = (title: string, pdfUrl: string) => {
    setModalContent({ title, pdfUrl });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <Header />
      <div className="module-page">
        <aside className="module-sidebar">
          <Link to="/educational" className="back-button">
            Back to Overview
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>Overview</h3>
              <ul>
                <li>
                  <Link to="/module1" className="accordion-link">
                    Health Risk
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module2" className="accordion-link">
                    Antenatal Visits
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module3" className="accordion-link">
                    Birth Methods
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module4" className="accordion-link">
                    Nutrition
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Prenatal Exercises " ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Prenatal Exercises ")}
                  >
                    Prenatal Exercises
                    <span
                      className={`arrow ${
                        expandedSection === "Prenatal Exercises "
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Prenatal Exercises " && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          5.1 Why Prenatal Exercise Matters
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          5.2 Safe Exercises for Each Trimester
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          5.3 Exercises to Prepare for Labor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          5.4 Safety First, Always!
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          5.5 Test Your Knowledge!
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/module6" className="accordion-link">
                    Postpartum Exercises
                    <span className="arrow right"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="module-content">
          <h2>5. Prenatal Exercises </h2>

          <section id="section1">
            <h3>5.1 Why Prenatal Exercise Matters</h3>
            <p>Content for Topic One...</p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "")}
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>5.2 Safe Exercises for Each Trimester</h3>
            <p>Content for Topic Two...</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "")}
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>5.3 Exercises to Prepare for Labor</h3>
            <p>Content for Topic Three...</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "")}
            >
              More Details...
            </a>
          </section>

          <section id="section4">
            <h3>5.4 Safety First, Always!</h3>
            <p>Content for Topic Three...</p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>5.5 Knowledge Checker</h3>
            <p>Quiz questions go here...</p>
          </section>

          <div className="navigation-buttons">
            <Link to="/module4">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module6">
              <button className="next-button">Next Chapter</button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
      {modalContent && (
        <Modal
          title={modalContent.title}
          pdfUrl={modalContent.pdfUrl}
          onClose={closeModal}
        />
      )}
    </>
  );
};
