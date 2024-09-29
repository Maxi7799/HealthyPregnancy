import React, { useEffect, useState } from "react";
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

export const ModulePage3: React.FC = () => {
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
            Back to Overview
          </Link>
          <div className="contents-container">
            <nav className="module-contents">
              <h3>Overview</h3>
              <ul>
                <li>
                  <Link to="/module1" className="accordion-link">
                    Health risk
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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Birth Methods" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Birth Methods")}
                  >
                    Birth Methods
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
                          3.1 Different Types of Birth Methods
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          3.2 Why Does It Matter?
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          3.3 How to Choose?
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          3.4 Vaginal Birth vs. C-Section
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          onClick={(e) => handleLinkClick(e, "#section5")}
                        >
                          3.5 Recovery After Childbirth
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          3.6 Test Your Knowledge
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>3. Birth Methods</h2>
          <p>
            This section explores childbirth methods—vaginal birth, cesarean
            section (C-section), and assisted vaginal delivery. It outlines the
            pros and cons, recovery times, and factors influencing choices. A
            comparison of postpartum recovery for each method is included, along
            with a quiz to enhance understanding and promote discussions with
            healthcare providers.
          </p>

          <section id="section1">
            <h3>3.1 Different Types of Birth Methods</h3>
            <p>
              Understanding common birth methods can help you feel more prepared
              as your due date approaches. Vaginal birth is the most common
              method, offering quicker recovery and immediate skin-to-skin
              contact. A C-section is a surgical delivery through the abdomen,
              often planned for medical reasons or needed during labor, with a
              longer recovery time. Assisted vaginal delivery uses tools like
              forceps or a vacuum to help during difficult labor. Consider the
              benefits and risks of each method, how to prepare if a C-section
              is recommended, signs that might require assistance, and how to
              discuss your birth plan with your healthcare provider.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() =>
                openModal("Different Types of Birth Methods", "m3t1.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>3.2 Why Does It Matter?</h3>
            <p>
              Choosing a birth method affects your recovery, future pregnancies,
              and your baby’s health. Vaginal births usually offer quicker
              recovery and beneficial bacteria for the baby, while C-sections
              have longer recovery times, higher risks of complications, and may
              influence future deliveries. Discussing your options with your
              healthcare provider will help you make the best choice for you and
              your baby.
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Why Does It Matter?", "m3t2.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>3.3 How to Choose?</h3>
            <p>
              Several factors influence the choice of birth method, including
              your baby’s position, health conditions like gestational diabetes
              or hypertension, and personal preferences. For instance, a breech
              position may lead to a recommended C-section, while some moms
              choose a planned C-section based on previous experiences or
              anxiety about labor. Cultural and religious beliefs can also play
              a role in this decision. Regular communication with your
              healthcare team is essential to align your preferences with
              medical advice. Remember, every pregnancy is unique, and it’s okay
              to adjust your birth plan as needed.
            </p>
            <p>
              Here’s some data on the most common birth methods to help you make
              an informed choice:
            </p>
            <div className="chart-section">
              {birthMethodData ? (
                <>
                  <div className="chart">
                    <BirthMethodChart data={birthMethodData} />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p>
              Remember, every pregnancy is unique, and it’s okay to adjust your
              birth plan as needed. Below are some common reason for choosing
              c-section:
            </p>
            <div className="chart-section">
              {cReasonData ? (
                <>
                  <div className="chart">
                    <HorizontalBarChart data={cReasonData} />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p>You can also found more details below</p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() => openModal("How to Choose?", "m3t3.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section4">
            <h3>3.4 Vaginal Birth vs. C-Section</h3>
            <p>
              Vaginal births offer benefits like shorter recovery times, lower
              infection risks, and fewer complications in future pregnancies,
              though they can involve longer labor and the potential for
              tearing. On the other hand, C-sections can be planned in advance
              and avoid the risk of tearing but come with longer recovery times
              and higher risks of infection and complications. Women who have
              C-sections typically experience extended hospital stays and
              healing periods, making it important to weigh these factors when
              deciding on a delivery method.
            </p>
            <p>
              Below chart shows the Recovery Time (in days) for each Birth
              Method:
            </p>
            <div className="stack-bar-chart-container">
              {postLengthData ? (
                <>
                  <div>
                    <PostLengthStackBarChart data={postLengthData} />
                    <p>Child Birth Method</p>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() =>
                openModal("Vaginal Birth vs. C-Section", "m3t4.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section5">
            <h3>3.5 Recovery After Childbirth</h3>
            <p>
              Recovery after childbirth varies depending on whether you had a
              vaginal birth or a C-section. Vaginal birth recovery typically
              takes 4-6 weeks, with pain managed by over-the-counter
              medications. Women can gradually resume daily activities and focus
              on perineal care and Kegel exercises to strengthen pelvic floor
              muscles. C-section recovery usually takes 6-8 weeks or longer,
              with prescription pain relief often needed initially. Physical
              activity should be limited to walking, and incision care is
              crucial to avoid infection. Both types of recovery benefit from
              proper postpartum care, including breastfeeding support and a
              balanced diet to promote healing.
            </p>
            <a
              href="#section5-more"
              className="details-link"
              onClick={() => openModal("Recovery After Childbirth", "m3t5.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>3.6 Knowledge Checker</h3>
            <p>
              Try the questions below to test your understanding of the above
              content.
            </p>
            <QuestionSlideshow3 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module2">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module4">
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
