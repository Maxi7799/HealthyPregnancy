import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";

export const ModulePage6: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Postpartum Exercises"
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
                  <Link to="/module5" className="accordion-link">
                    Prenatal Exercises
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Postpartum Exercises" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Postpartum Exercises")}
                  >
                    Postpartum Exercises
                    <span
                      className={`arrow ${
                        expandedSection === "Postpartum Exercises"
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Postpartum Exercises" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          6.1 The First 6 Weeks: Gentle Healing Movements
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          6.2 Rebuilding Core and Pelvic Floor Strength (6-12
                          Weeks)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          6.3 Test Your Knowledge!
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
          <h2>6. Postpartum Exercises</h2>

          <section id="section1">
            <h3>6.1 The First 6 Weeks: Gentle Healing Movements</h3>
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
            <h3>6.2 Rebuilding Core and Pelvic Floor Strength (6-12 Weeks)</h3>
            <p>Content for Topic Two...</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>6.3 Test Your Knowledge!</h3>
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
