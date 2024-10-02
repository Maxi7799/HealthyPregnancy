import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { rootAddress } from "../../../../env";
import { TwoLineChart } from "../../../components/chart/twoLineChart";
import { QuestionSlideshow1 } from "../quizs/questionSlideShow1";
import { useTranslation } from "react-i18next";

export const ModulePage1: React.FC = () => {
  const [t] = useTranslation("global");

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Health Risk"
  );
  const [modalContent, setModalContent] = useState<{
    title: string;
    pdfUrl: string;
  } | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openModal = (title: string, pdfUrl: string) => {
    setModalContent({ title, pdfUrl });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const [healthRiskData, setHealthRiskData] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/healthrisk`);
      const data = await response.json();
      setHealthRiskData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Health Risk" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Health Risk")}
                  >
                    {t("education.sidebar.card-1-title")}
                    <span
                      className={`arrow ${
                        expandedSection === "Health Risk" ? "down" : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Health Risk" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          {t("education.sidebar.card-1-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-1-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-1-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-1-topic-4")}
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>{t("education.card-1.module-name")}</h2>
          <p>{t("education.card-1.module-desc")}</p>

          <section id="section1">
            <h3>{t("education.card-1.topic-1-name")}</h3>
            <p>
              {t("education.card-1.topic-1-desc.text-1")}{" "}
              <span
                className="text-link"
                onClick={(e) => handleLinkClick(e, "#section2")}
              >
                {t("education.card-1.topic-1-desc.nav-1")}
              </span>
              ,{" "}
              <span
                className="text-link"
                onClick={(e) => handleLinkClick(e, "#section3")}
              >
                {t("education.card-1.topic-1-desc.nav-2")}
              </span>{" "}
              {t("education.card-1.topic-1-desc.text-2")}
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() => openModal("Common Health Risk", "m1t1.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section2">
            <h3>{t("education.card-1.topic-2-name")}</h3>
            <p>{t("education.card-1.topic-2-desc.text-1")}</p>
            <div className="chart-section">
              {healthRiskData ? (
                <>
                  <div className="chart">
                    <TwoLineChart data={healthRiskData} />
                  </div>
                </>
              ) : (
                <p>{t("education.card-1.topic-2-desc.loading")}</p>
              )}
            </div>
            <p>
              {t("education.card-1.topic-2-desc.text-2")}{" "}
              <Link to="/module3" className="text-link">
                {t("education.card-1.topic-2-desc.nav-1")}
              </Link>
            </p>
            <p>{t("education.card-1.topic-2-desc.text-3")}</p>
            <Link to="/nutrition-analysis" className="text-link">
              {t("education.card-1.topic-2-desc.nav-2")}
            </Link>
            <tr></tr>
            <Link to="/exercise" className="text-link">
              {t("education.card-1.topic-2-desc.nav-3")}
            </Link>
            <p>
              {t("education.card-1.topic-2-desc.text-4")}{" "}
              <Link to="/risk-assessment" className="text-link">
                {t("education.card-1.topic-2-desc.nav-4")}
              </Link>
            </p>

            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Gestational Diabetes", "m1t2.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section3">
            <h3>{t("education.card-1.topic-3-name")}</h3>
            <p>{t("education.card-1.topic-3-desc.text-1")}</p>

            <p>{t("education.card-1.topic-3-desc.text-2")}</p>
            <Link to="/nutrition-analysis" className="text-link">
              {t("education.card-1.topic-3-desc.nav-1")}
            </Link>
            <tr></tr>
            <Link to="/exercise" className="text-link">
              {t("education.card-1.topic-3-desc.nav-2")}
            </Link>

            <p>
              {t("education.card-1.topic-3-desc.text-3")}{" "}
              <Link to="/module2" className="text-link">
                {t("education.card-1.topic-3-desc.nav-3")}
              </Link>
            </p>

            <a
              href="#section3-more"
              className="details-link"
              onClick={() => openModal("Hyperension", "m1t3.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="quiz">
            <h3>{t("education.card-1.quiz.topic-4-name")}</h3>
            <p>{t("education.card-1.quiz.desc")}</p>
            <QuestionSlideshow1 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module1">
              <button className="prev-button">
                {t("education.card-1.prepage-btn")}
              </button>
            </Link>
            <Link to="/module2">
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
