import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { QuestionSlideshow6 } from "../quizs/questionSlideShow6";
import { useTranslation } from "react-i18next";

export const ModulePage6: React.FC = () => {
  const [t] = useTranslation("global");

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
            {t("education.sidebar.back-btn")}
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>{t("education.sidebar.overview")}</h3>
              <ul>
                <li>
                  <Link to="/module1" className="accordion-link">
                    {t("education.sidebar.card-1-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module2" className="accordion-link">
                    {t("education.sidebar.card-2-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module3" className="accordion-link">
                    {t("education.sidebar.card-3-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module4" className="accordion-link">
                    {t("education.sidebar.card-4-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module5" className="accordion-link">
                    {t("education.sidebar.card-5-title")}
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
                    {t("education.sidebar.card-6-title")}
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
                          {t("education.sidebar.card-6-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-6-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-6-topic-3")}
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
          <p>
            Congratulations, mama! The postpartum period is all about recovery,
            rebuilding, and reconnecting with your body. Let’s ease back into
            movement, focusing on gentle exercises that support your healing
            journey.
          </p>

          <section id="section1">
            <h3>6.1 The First 6 Weeks: Gentle Healing Movements</h3>
            <p>
              During the first 6 weeks postpartum, rest is crucial, but gentle
              movements can aid recovery. <strong>Deep belly breathing</strong>{" "}
              helps re-engage core muscles and reduce tension by taking slow,
              deep breaths while sitting comfortably.{" "}
              <strong>Pelvic tilts</strong> relieve lower back tension and begin
              strengthening the core by gently tilting the pelvis upward while
              lying on your back with bent knees.{" "}
              <strong>Gentle walking</strong> boosts circulation and mood,
              starting with short 5-10 minute walks.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "The First 6 Weeks: Gentle Healing Movements",
                  "m6t1.pdf"
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>6.2 Rebuilding Core and Pelvic Floor Strength (6-12 Weeks)</h3>
            <p>
              Between 6-12 weeks postpartum, with your doctor’s approval, focus
              on rebuilding core strength. <strong>Heel slides</strong> help
              reconnect core muscles and strengthen the lower abs by sliding one
              heel away and back while lying on your back with one knee bent.{" "}
              <strong>Bridges</strong> activate the glutes and core by lifting
              your hips off the floor while lying on your back with knees bent.
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Rebuilding Core and Pelvic Floor Strength (6-12 Weeks)",
                  "m6t2.pdf"
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>6.3 Test Your Knowledge!</h3>
            <p>
              Try the questions below to test your understanding of the above
              content.
            </p>
            <QuestionSlideshow6 />
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
