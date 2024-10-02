import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { QuestionSlideshow5 } from "../quizs/questionSlideShow5";
import { useTranslation } from "react-i18next";

export const ModulePage5: React.FC = () => {
  const [t] = useTranslation("global")
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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Prenatal Exercises " ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Prenatal Exercises ")}
                  >
                    {t("education.sidebar.card-5-title")}
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
                          {t("education.sidebar.card-5-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-5-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-5-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          {t("education.sidebar.card-5-topic-4")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-5-topic-5")}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/module6" className="accordion-link">
                    {t("education.sidebar.card-6-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="module-content">
          <h2>{t("education.card-5.module-name")}</h2>
          <p>{t("education.card-5.module-desc")}</p>

          <section id="section1">
            <h3>{t("education.card-5.topic-1-name")}</h3>
            <p>{t("education.card-5.topic-1-desc.text-1")}</p>
            <p>
              {t("education.card-5.topic-1-desc.text-2")}{" "}
              <Link to="/exercise" className="text-link">
                {t("education.card-5.topic-1-desc.nav-1")}
              </Link>
              .
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal("Why Prenatal Exercise Matters", "m5t1.pdf")
              }
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section2">
            <h3>{t("education.card-5.topic-2-name")}</h3>
            <p> {t("education.card-5.topic-2-desc.text-1")}</p>
            <p>{t("education.card-5.topic-2-desc.text-2")} </p>
            <p>{t("education.card-5.topic-2-desc.text-3")}</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() =>
                openModal("Safe Exercises for Each Trimester", "m5t2.pdf")
              }
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section3">
            <h3>{t("education.card-5.topic-3-name")}</h3>
            <p>{t("education.card-5.topic-3-desc.text-1")}</p>
            <p>{t("education.card-5.topic-3-desc.text-2")}</p>
            <p>{t("education.card-5.topic-3-desc.text-3")}</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal("Exercises to Prepare for Labor", "m5t3.pdf")
              }
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section4">
            <h3>{t("education.card-5.topic-4-name")}</h3>
            <p>{t("education.card-5.topic-4-desc.text-1")}</p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() => openModal("Safety First, Always!", "m5t4.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="quiz">
            <h3>{t("education.card-5.quiz.topic-5-name")}</h3>
            <p>{t("education.card-5.quiz.desc")}</p>
            <QuestionSlideshow5 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module4">
              <button className="prev-button">
                {t("education.card-1.prepage-btn")}
              </button>
            </Link>
            <Link to="/module6">
              <button className="next-button">
                {t("education.card-1.nextpage-btn")}
              </button>
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
