import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick"

const Modal: React.FC<{
  title: string;
  content: string;
  onClose: () => void;
}> = ({ title, content, onClose }) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export const ModulePage1: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Health Risk"
  );
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };



  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Health Risk" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Health Risk")}
                  >
                    Health Risk
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
                          1.1 Common Health Risk
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          1.2 Gestational Diabetes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          1.3 Hyperension
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          1.4 Test Your Knowledge!
                        </a>
                      </li>
                    </ul>
                  )}
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
                    Exercise and Physical Activity
                    <span className="arrow right"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/module6" className="accordion-link">
                    Birth Preparation
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
              Common complications include gestational diabetes, high blood
              pressure (which can lead to preeclampsia), infections, preterm
              labor, and mental health challenges like depression and anxiety.
              More serious conditions like pregnancy loss, miscarriage, or
              stillbirth, though rare, also require awareness. Trust your body
              and seek medical advice if you notice symptoms like severe
              headaches, vision problems, unusual swelling, or pain. Regular
              prenatal care, a balanced diet, staying active, and seeking
              support are key to a healthy pregnancy.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic One Details",
                  "Detailed content for Topic One..."
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>1.2 Gestational Diabetes</h3>
            <p>
              Did you know that from 2014 to 2021, cases of gestational diabetes
              rose by over 80%? Gestational diabetes is a type of diabetes that
              develops during pregnancy, typically around the 24th week, and can
              have long-term effects such as an increased risk of type 2
              diabetes for the mother and potential health issues for the child.
              It can cause larger babies, leading to complications during
              delivery and a higher likelihood of needing a C-section. Risk
              factors include obesity, age, family history, and ethnicity.
              Managing gestational diabetes involves monitoring blood sugar,
              eating a healthy diet, staying active, and sometimes taking
              medication. Awareness and proactive management are crucial for the
              health of both mother and baby.
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic Two Details",
                  "Detailed content for Topic Two..."
                )
              }
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
              activity, stress, and being overweight. Managing hypertension
              involves lifestyle changes, such as a heart-healthy diet and
              regular exercise. Regular check-ups are essential for catching and
              managing this condition early to prevent serious health issues.
            </p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal(
                  "Topic Three Details",
                  "Detailed content for Topic Three..."
                )
              }
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>1.4 Knowledge Checker</h3>
            <p>
              Below link goes to questions to test your understanding of the
              education.
            </p>
            <a href="#quiz-more" className="details-link">
              Quesitons go here
            </a>
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
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </>
  );
};
