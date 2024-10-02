import React, { useEffect, useState, useTransition } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { rootAddress } from "../../../../env";
import BirthMethodChart from "../../../components/chart/birthMethodChart";
import HorizontalBarChart from "../../../components/chart/horizontalBarChart";
import PostLengthStackBarChart from "../../../components/chart/postLengthStackbarChart";
import { QuestionSlideshow3 } from "../quizs/questionSlideShow3";
import { useTranslation } from "react-i18next";

export const ModulePage3: React.FC = () => {
  const [t] = useTranslation("global");

  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Birth Methods"
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

  const [birthMethodData, setBirthMethodData] = useState<any>(null);
  const [cReasonData, setCReasonData] = useState<any>(null);
  const [postLengthData, setPostLengthData] = useState<any>(null);

  const fetchBirthMethodData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/birthmethod`);
      const data = await response.json();
      setBirthMethodData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCReasonData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/creason`);
      const data = await response.json();
      setCReasonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPostLengthData = async () => {
    try {
      const response = await fetch(rootAddress + `/datainsight/postlength`);
      const data = await response.json();
      setPostLengthData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBirthMethodData();
    fetchCReasonData();
    fetchPostLengthData();
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
                  <Link to="/module2" className="accordion-link">
                    {t("education.sidebar.card-2-title")}
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <div
                    className={`accordion-title ${
                      expandedSection === "Birth Methods" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Birth Methods")}
                  >
                    {t("education.sidebar.card-3-title")}
                    <span
                      className={`arrow ${
                        expandedSection === "Birth Methods" ? "down" : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Birth Methods" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          {t("education.sidebar.card-3-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-3-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-3-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          {t("education.sidebar.card-3-topic-4")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          onClick={(e) => handleLinkClick(e, "#section5")}
                        >
                          {t("education.sidebar.card-3-topic-5")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-3-topic-6")}
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>{t("education.card-3.module-name")}</h2>
          <p>{t("education.card-3.module-desc")}</p>

          <section id="section1">
            <h3>{t("education.card-3.topic-1-name")}</h3>
            <p>{t("education.card-3.topic-1-desc.text-1")}</p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal("Different Types of Birth Methods", "m3t1.pdf")
              }
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section2">
            <h3>{t("education.card-3.topic-2-name")}?</h3>
            <p>{t("education.card-3.topic-2-desc.text-1")}</p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Why Does It Matter?", "m3t2.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section3">
            <h3>{t("education.card-3.topic-3-name")}</h3>
            <p>{t("education.card-3.topic-3-desc.text-1")}</p>
            <p>{t("education.card-3.topic-3-desc.text-2")}</p>
            <div className="chart-section">
              {birthMethodData ? (
                <>
                  <div className="chart">
                    <BirthMethodChart data={birthMethodData} />
                  </div>
                </>
              ) : (
                <p>{t("education.card-2.topic-2-desc.loading")}</p>
              )}
            </div>
            <p>{t("education.card-3.topic-3-desc.text-3")}</p>
            <div className="chart-section">
              {cReasonData ? (
                <>
                  <div className="chart">
                    <HorizontalBarChart data={cReasonData} />
                  </div>
                </>
              ) : (
                <p>{t("education.card-2.topic-2-desc.loading")}</p>
              )}
            </div>
            <p>{t("education.card-3.topic-3-desc.text-4")}</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() => openModal("How to Choose?", "m3t3.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section4">
            <h3>{t("education.card-3.topic-4-name")}</h3>
            <p>{t("education.card-3.topic-4-desc.text-1")}</p>
            <p>{t("education.card-3.topic-4-desc.text-2")}</p>
            <div className="stack-bar-chart-container">
              {postLengthData ? (
                <>
                  <div>
                    <PostLengthStackBarChart data={postLengthData} />
                    <p>Child Birth Method</p>
                  </div>
                </>
              ) : (
                <p>{t("education.card-2.topic-2-desc.loading")}</p>
              )}
            </div>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() =>
                openModal("Vaginal Birth vs. C-Section", "m3t4.pdf")
              }
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="section5">
            <h3>{t("education.card-3.topic-5-name")}</h3>
            <p>{t("education.card-3.topic-5-desc.text-1")}</p>
            <a
              href="#section5-more"
              className="details-link"
              onClick={() => openModal("Recovery After Childbirth", "m3t5.pdf")}
            >
              {t("education.card-1.more-details")}
            </a>
          </section>

          <section id="quiz">
            <h3>{t("education.card-3.quiz.topic-6-name")}</h3>
            <p>{t("education.card-3.quiz.desc")}</p>
            <QuestionSlideshow3 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module2">
              <button className="prev-button">
                {t("education.card-1.prepage-btn")}
              </button>
            </Link>
            <Link to="/module4">
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
