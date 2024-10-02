import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { rootAddress } from "../../../../env";
import FirstVisitPieChart from "../../../components/chart/FirstVisitPieChart";
import { QuestionSlideshow2 } from "../quizs/questionSlideShow2";
import { useTranslation } from "react-i18next";

export const ModulePage2: React.FC = () => {
  const [t] = useTranslation("global");

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Antenatal Visits"
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

  const [firstVisitData, setFirstVisitData] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/firstvisit`);
      const data = await response.json();
      setFirstVisitData(data);
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
                  <Link to="/module1" className="accordion-link">
                    {t("education.sidebar.card-1-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Antenatal Visits" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Antenatal Visits")}
                  >
                    {t("education.sidebar.card-2-title")}
                    <span
                      className={`arrow ${
                        expandedSection === "Antenatal Visits"
                          ? "down"
                          : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Antenatal Visits" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          {t("education.sidebar.card-2-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-2-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-2-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          {t("education.sidebar.card-2-topic-4")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          onClick={(e) => handleLinkClick(e, "#section5")}
                        >
                          {t("education.sidebar.card-2-topic-5")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section6"
                          onClick={(e) => handleLinkClick(e, "#section6")}
                        >
                          {t("education.sidebar.card-2-topic-6")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-2-topic-7")}
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>{t("education.card-2.module-name")}</h2>
          <p>{t("education.card-2.module-desc")}</p>

          <section id="section1">
            <h3>{t("education.card-2.topic-1-name")}</h3>
            <p>{t("education.card-2.topic-1-desc.text-1")}</p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal("Why Are Antenatal Visits Important?", "m2t1.pdf")
              }
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="section2">
            <h3>{t("education.card-2.topic-2-name")}</h3>
            <p>{t("education.card-2.topic-2-desc.text-1")}</p>
            <div className="chart-section">
              {firstVisitData ? (
                <>
                  <div className="chart">
                    <FirstVisitPieChart data={firstVisitData} />
                  </div>
                </>
              ) : (
                <p>{t("education.card-2.topic-2-desc.loading")}</p>
              )}
            </div>
            <p>{t("education.card-2.topic-2-desc.text-2")}</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("When Should You Go?", "m2t2.pdf")}
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="section3">
            <h3>{t("education.card-2.topic-3-name")}</h3>
            <p>{t("education.card-2.topic-3-desc.text-1")}</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "What to Prepare/Expect Before Your Antenatal Visit",
                  "m2t3.pdf"
                )
              }
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="section4">
            <h3>{t("education.card-2.topic-4-name")}</h3>
            <p>{t("education.card-2.topic-4-desc.text-1")}</p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() =>
                openModal("What Happens During Antenatal Visits?", "m2t4.pdf")
              }
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="section5">
            <h3>{t("education.card-2.topic-5-name")}</h3>
            <p>{t("education.card-2.topic-5-desc.text-1")}</p>
            <a
              href="#section5-more"
              className="details-link"
              onClick={() =>
                openModal("After Your Antenatal Visit", "m2t5.pdf")
              }
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="section6">
            <h3>{t("education.card-2.topic-6-name")}</h3>
            <p>{t("education.card-2.topic-6-desc.text-1")}</p>
            <a
              href="#section6-more"
              className="details-link"
              onClick={() =>
                openModal("Why Regular Check-ups Matter", "m2t6.pdf")
              }
            >
              {t("education.card-2.more-details")}
            </a>
          </section>

          <section id="quiz">
            <h3>{t("education.card-2.quiz.topic-7-name")}</h3>
            <p>{t("education.card-2.quiz.desc")}</p>
            <QuestionSlideshow2 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module1">
              <button className="prev-button">
                {t("education.card-1.prepage-btn")}
              </button>
            </Link>
            <Link to="/module3">
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
