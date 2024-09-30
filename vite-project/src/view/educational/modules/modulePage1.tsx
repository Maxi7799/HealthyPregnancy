import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick"
import {Modal} from "./popupModel"
import { rootAddress } from "../../../../env";
import { TwoLineChart } from "../../../components/chart/twoLineChart";
import { QuestionSlideshow1 } from "../quizs/questionSlideShow1";
import { useTranslation } from "react-i18next";


export const ModulePage1: React.FC = () => {
  const [t] = useTranslation("global")

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
          <h2>1. Health Risk</h2>
          <p>
            This module covers important health risks during pregnancy,
            including gestational diabetes, hypertension, and emotional
            well-being. Staying informed and proactive helps expectant mothers
            manage these risks effectively, ensuring a healthier journey for
            both themselves and their babies. Regular check-ups and healthy
            lifestyle choices are key to supporting overall health during this
            exciting time.
          </p>

          <section id="section1">
            <h3>1.1 Common Health Risk</h3>
            <p>
              Common complications include{" "}
              <span
                className="text-link"
                onClick={(e) => handleLinkClick(e, "#section2")}
              >
                gestational diabetes
              </span>
              ,{" "}
              <span
                className="text-link"
                onClick={(e) => handleLinkClick(e, "#section3")}
              >
                high blood pressure
              </span>{" "}
              (which can lead to preeclampsia), infections, preterm labor, and
              mental health challenges like depression and anxiety. More serious
              conditions like pregnancy loss, miscarriage, or stillbirth, though
              rare, also require awareness. Trust your body and seek medical
              advice if you notice symptoms like severe headaches, vision
              problems, unusual swelling, or pain. Regular prenatal care, a
              balanced diet, staying active, and seeking support are key to a
              healthy pregnancy.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() => openModal("Common Health Risk", "m1t1.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>1.2 Gestational Diabetes</h3>
            <p>
              Did you know that from 2014 to 2021, cases of gestational diabetes
              rose by over 80%?
            </p>
            <div className="chart-section">
              {healthRiskData ? (
                <>
                  <div className="chart">
                    <TwoLineChart data={healthRiskData} />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p>
              Gestational diabetes is a type of diabetes that develops during
              pregnancy, typically around the 24th week, and can have long-term
              effects such as an increased risk of type 2 diabetes for the
              mother and potential health issues for the child. It can cause
              larger babies, leading to complications during delivery and a
              higher likelihood of needing a C-section{" "}
              <Link to="/module3" className="text-link">
                (Visit our education to reduce the risk).
              </Link>
            </p>
            <p>
              Risk factors include obesity, age, family history, and ethnicity.
              Managing gestational diabetes involves monitoring blood sugar,
              eating a healthy diet, staying active, and sometimes taking
              medication. Awareness and proactive management are crucial for the
              health of both mother and baby. For more tailored support, check
              out our:
            </p>
            <Link to="/nutrition-analysis" className="text-link">
              1. Nutrition Recommendations
            </Link>
            <tr></tr>
            <Link to="/exercise" className="text-link">
              2. Exercise
            </Link>
            <p>
              Being a migrant women may face higher risk factors for gestational
              diabetes due to dietary changes, limited access to healthcare, and
              stress. If you’d like to assess your risk,{" "}
              <Link to="/risk-assessment" className="text-link">
                click here.
              </Link>
            </p>

            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Gestational Diabetes", "m1t2.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>1.3 Hyperension</h3>
            <p>
              Between 2014 and 2021, hypertension has been steadily rising,
              becoming a common health concern, though not as dramatically as
              diabetes. Hypertension, or high blood pressure, increases the risk
              of heart disease, stroke, and kidney problems and often goes
              unnoticed, earning it the nickname “silent killer.” It can be
              caused by factors like genetics, poor diet, lack of physical
              activity, stress, and being overweight.{" "}
            </p>

            <p>
              Managing hypertension involves lifestyle changes, such as a
              heart-healthy diet and regular exercise. To help you along the
              way, check out our resources on:{" "}
            </p>
            <Link to="/nutrition-analysis" className="text-link">
              1. Nutrition Recommendations
            </Link>
            <tr></tr>
            <Link to="/exercise" className="text-link">
              2. Exercise
            </Link>

            <p>
              Regular check-ups are essential for catching and managing this
              condition early to prevent serious health issues.{" "}
              <Link to="/module2" className="text-link">
                (More information can be found here)
              </Link>
            </p>

            <a
              href="#section3-more"
              className="details-link"
              onClick={() => openModal("Hyperension", "m1t3.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>1.4 Test Your Knowledge!</h3>
            <p>
              Try the questions below to test your understanding of the above
              content.
            </p>
            <QuestionSlideshow1 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module1">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module2">
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
