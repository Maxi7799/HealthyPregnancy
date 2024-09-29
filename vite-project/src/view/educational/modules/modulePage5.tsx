import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";

export const ModulePage5: React.FC = () => {
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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Prenatal Exercises " ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Prenatal Exercises ")}
                  >
                    Prenatal Exercises
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
                          5.1 Why Prenatal Exercise Matters
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          5.2 Safe Exercises for Each Trimester
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          5.3 Exercises to Prepare for Labor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          5.4 Safety First, Always!
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          5.5 Test Your Knowledge!
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>5. Prenatal Exercises </h2>
          <p>
            Hey mama! Staying active during pregnancy isn’t just about keeping
            fit—it’s a wonderful way to prepare your body for the changes ahead,
            keep your energy up, and even help with labour. This category is
            about ensuring you feel strong, healthy, and empowered throughout
            each stage of your pregnancy. From safe exercise routines to tips on
            managing discomfort, we’ve got you covered!
          </p>

          <section id="section1">
            <h3>5.1 Why Prenatal Exercise Matters</h3>
            <p>
              Prenatal exercise is highly beneficial for both you and your baby.
              It boosts your energy, eases aches and pains, prepares your body
              for labor by strengthening muscles and improving flexibility,
              supports your baby’s health through better blood circulation, and
              reduces the risk of complications like gestational diabetes and
              preeclampsia. Staying active is one of the best things you can do
              during pregnancy.
            </p>
            <p>
              Quick Tip: Aim for about 30 minutes a day of moderate exercise
              like walking or prenatal yoga, but always listen to your body. If
              you feel tired, it’s okay to rest! If you want to know more about
              prenatal exercises, click here{" "}
              <Link to="/exercise" className="text-link">
                (link to exercise)
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
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>5.2 Safe Exercises for Each Trimester</h3>
            <p>
              {" "}
              • First Trimester (Weeks 1-12): Focus on light cardio like walking
              and swimming, low-impact strength training for arms and legs with
              small weights, and gentle stretching or prenatal yoga. Move slowly
              and control movements, especially if feeling tired or nauseous.{" "}
            </p>
            <p>
              • Second Trimester (Weeks 13-28): This is the best time for
              exercise as many moms feel more energetic. Incorporate low-impact
              aerobics, modified Pilates, and resistance band exercises. Focus
              on building strength and maintaining good posture as your bump
              grows. Avoid lying flat on your back.{" "}
            </p>
            <p>
              • Third Trimester (Weeks 29-40): Stick to low-impact activities
              like prenatal yoga, seated exercises, and gentle stretching. Add
              pelvic floor exercises like Kegels and pelvic tilts to prepare for
              labor. Gentle cardio, such as swimming or leisurely walks, is
              recommended. Be mindful of balance as your center of gravity
              shifts.
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() =>
                openModal("Safe Exercises for Each Trimester", "m5t2.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>5.3 Exercises to Prepare for Labor</h3>
            <p>
              • Squats: Strengthen your legs and pelvic floor, essential muscles
              for labor. Stand with feet shoulder-width apart, squat as if
              sitting in a chair, hold for a few seconds, then rise back up.
            </p>
            <p>
              • Kegel Exercises: Strengthen your pelvic floor, aiding in pushing
              during labor and preventing incontinence. Squeeze the muscles used
              to stop urine flow, hold for 5 seconds, then release. Do 10 reps,
              3 times a day.
            </p>
            <p>
              • Cat-Cow Stretches: Relieve lower back pain and improve spinal
              flexibility. On hands and knees, arch your back upwards like a
              cat, then lower it, letting your belly drop toward the floor.
            </p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal("Exercises to Prepare for Labor", "m5t3.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section4">
            <h3>5.4 Safety First, Always!</h3>
            <p>
              Safety is crucial during pregnancy, so always listen to your
              body—if you feel tired, lightheaded, or uncomfortable, take a
              break. Avoid high-impact activities like running or jumping, lying
              flat on your back after the first trimester, and exercises that
              require holding your breath. Stay hydrated by drinking plenty of
              water before, during, and after exercise. Stop immediately if you
              experience dizziness, severe shortness of breath, headache, chest
              pain, sudden swelling, contractions, or decreased baby movements.
              Your well-being and your baby’s health are top priorities, so
              exercise with caution.
            </p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() => openModal("Safety First, Always!", "m5t4.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>5.5 Knowledge Checker</h3>
            <p>Quiz questions go here...</p>
          </section>

          <div className="navigation-buttons">
            <Link to="/module4">
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
