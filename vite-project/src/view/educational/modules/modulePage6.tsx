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
          <h2>{t("education.card-6.module-name")}</h2>
          <p>{t("education.card-6.module-desc")}</p>

          <section id="section1">
            <h3>{t("education.card-6.topic-1-name")}</h3>
            <p>
              {t("education.card-6.topic-1-desc.text-1")}{" "}
              <strong> {t("education.card-6.topic-1-desc.text-2")}</strong>{" "}
              {t("education.card-6.topic-1-desc.text-3")}{" "}
              <strong> {t("education.card-6.topic-1-desc.text-4")}</strong>{" "}
              {t("education.card-6.topic-1-desc.text-5")}
              <strong> {t("education.card-6.topic-1-desc.text-6")}</strong>{" "}
              {t("education.card-6.topic-1-desc.text-7")}
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
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section2">
            <h3>{t("education.card-6.topic-2-name")}</h3>
            <p>
              {t("education.card-6.topic-2-desc.text-1")}{" "}
              <strong>{t("education.card-6.topic-2-desc.text-2")}</strong>{" "}
              {t("education.card-6.topic-2-desc.text-3")}{" "}
              <strong>{t("education.card-6.topic-2-desc.text-4")}</strong>{" "}
              {t("education.card-6.topic-2-desc.text-5")}
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
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="quiz">
            <h3>{t("education.card-6.quiz.topic-3-name")}</h3>
            <p>{t("education.card-6.quiz.desc")}</p>
            <QuestionSlideshow6 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module5">
              <button className="prev-button">
                {t("education.card-1.prepage-btn")}
              </button>
            </Link>
            <Link to="/risk-assessment">
              <p className="next-text">{t("education.card-6.nextpage-btn")}</p>
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
