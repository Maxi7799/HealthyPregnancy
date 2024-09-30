import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./modulePage.css";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer";
import handleLinkClick from "./slowLinkClick";
import { Modal } from "./popupModel";
import { QuestionSlideshow4 } from "../quizs/questionSlideShow4";
import { useTranslation } from "react-i18next";

export const ModulePage4: React.FC = () => {

  const [t] = useTranslation("global")
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "Nutrition"
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
                  <div
                    className={`accordion-title ${
                      expandedSection === "Nutrition" ? "active" : ""
                    }`}
                    onClick={() => toggleSection("Nutrition")}
                  >
                    {t("education.sidebar.card-4-title")}
                    <span
                      className={`arrow ${
                        expandedSection === "Nutrition" ? "down" : "right"
                      }`}
                    ></span>
                  </div>
                  {expandedSection === "Nutrition" && (
                    <ul className="submenu">
                      <li>
                        <a
                          href="#section1"
                          onClick={(e) => handleLinkClick(e, "#section1")}
                        >
                          {t("education.sidebar.card-4-topic-1")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section2"
                          onClick={(e) => handleLinkClick(e, "#section2")}
                        >
                          {t("education.sidebar.card-4-topic-2")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section3"
                          onClick={(e) => handleLinkClick(e, "#section3")}
                        >
                          {t("education.sidebar.card-4-topic-3")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section4"
                          onClick={(e) => handleLinkClick(e, "#section4")}
                        >
                          {t("education.sidebar.card-4-topic-4")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#section5"
                          onClick={(e) => handleLinkClick(e, "#section5")}
                        >
                          {t("education.sidebar.card-4-topic-5")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quiz"
                          onClick={(e) => handleLinkClick(e, "#quiz")}
                        >
                          {t("education.sidebar.card-4-topic-6")}
                        </a>
                      </li>
                    </ul>
                  )}
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
          <h2>4. Nutrition</h2>
          <p>
            This section provides essential information on the importance of
            balanced nutrition during pregnancy. Learn about key nutrients that
            support the health of both mother and baby, dietary guidelines for
            each trimester, foods to avoid, and healthy meal planning tips.
            Explore interactive tools and resources to help expectant mothers
            maintain a nutritious diet for optimal growth and development.
          </p>

          <section id="section1">
            <h3>4.1 Why Nutrition Matters</h3>
            <p>
              Proper nutrition during pregnancy is crucial for both maternal and
              fetal health. A well-balanced diet supports the development of
              critical organs like the brain, lungs, and heart, with nutrients
              like folic acid being vital for neural tube development. It also
              helps manage pregnancy symptoms such as nausea and fatigue,
              reduces the risk of complications like gestational diabetes and
              hypertension, and provides the energy needed for the increased
              physical and emotional demands. Additionally, good nutrition aids
              in maintaining hormonal balance, promoting emotional well-being
              during this significant life stage.
            </p>
            <a
              href="#section1-more"
              className="details-link"
              onClick={() => openModal("Why Nutrition Matters", "m4t1.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section2">
            <h3>4.2 Essential Nutrients</h3>
            <p>
              During pregnancy, specific nutrients are essential for supporting
              both the growing baby and the mother. Folic acid helps prevent
              neural tube defects, found in leafy greens, citrus fruits, and
              fortified cereals. Iron is crucial for producing extra blood and
              preventing anemia, available in lean meats, spinach, and beans.
              Calcium supports the baby’s bone development, with dairy products
              and almonds as good sources. Omega-3 fatty acids aid in brain
              development, found in salmon, walnuts, and flaxseeds. Fiber helps
              prevent constipation, common during pregnancy, with whole grains,
              fruits, and vegetables being excellent sources.
            </p>
            <p>
              Nutrient Guide: Visit our detailed guide for a list of recommended
              foods
              <Link to="/nutrition-analysis" className="text-link">
                (link to Nutrition)
              </Link>
              .
            </p>
            <a
              href="#section2-more"
              className="details-link"
              onClick={() => openModal("Essential Nutrients", "m4t2.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section3">
            <h3>4.3 Nutrition Standards for Pregnant Women</h3>
            <p>
              During pregnancy, caloric intake and macronutrient needs change
              over time. In the first trimester, focus on nutrient-dense foods
              as caloric needs don’t increase significantly. By the second
              trimester, an additional 300-350 calories per day is recommended,
              increasing to 450-500 calories per day in the third trimester.
              Protein intake should be 70-100 grams daily to support fetal
              development and maternal health. Carbohydrates should make up
              45-65% of daily calories, focusing on complex carbs like whole
              grains and vegetables. Healthy fats should account for 25-35% of
              daily calories, emphasizing unsaturated fats like olive oil and
              avocado for fetal brain development.
            </p>
            <a
              href="#section3-more"
              className="details-link"
              onClick={() =>
                openModal("Nutrition Standards for Pregnant Women", "m4t3.pdf")
              }
            >
              More Details...
            </a>
          </section>

          <section id="section4">
            <h3>4.4 Healthy Meal Planning</h3>
            <p>
              Healthy meal planning during pregnancy is key to ensuring you and
              your baby receive essential nutrients while avoiding processed
              foods. To maintain a balanced diet, plan meals ahead of time, pay
              attention to portion sizes, and keep healthy snacks like nuts and
              yogurt on hand. Aim for diverse meals by including a variety of
              fruits and vegetables, and remember to stay hydrated by drinking
              at least 8-10 glasses of water daily. This approach supports
              optimal health, energy levels, and reduces stress throughout your
              pregnancy.
            </p>
            <a
              href="#section4-more"
              className="details-link"
              onClick={() => openModal("Healthy Meal Planning", "m4t4.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="section5">
            <h3>4.5 Foods to Avoid</h3>
            <p>
              During pregnancy, it’s important to avoid certain foods that could
              pose risks to you and your baby. Steer clear of high-mercury fish
              like shark and swordfish, opting for low-mercury options like
              salmon instead. Avoid soft cheeses made from unpasteurized milk
              and processed meats like deli meats unless reheated to steaming.
              Unpasteurized dairy and juices should also be avoided to minimize
              the risk of harmful bacteria. Limit caffeine intake to 200 mg per
              day and avoid alcohol entirely. Be cautious with herbal teas, as
              some can be harmful; always consult your healthcare provider
              before consuming them. Understanding these risks helps you make
              informed dietary choices for a healthy pregnancy.
            </p>
            <a
              href="#section5-more"
              className="details-link"
              onClick={() => openModal("Foods to Avoid", "m4t5.pdf")}
            >
              More Details...
            </a>
          </section>

          <section id="quiz">
            <h3>4.6 Test Your Knowledge!</h3>
            <p>
              Try the questions below to test your understanding of the above
              content.
            </p>
            <QuestionSlideshow4 />
          </section>

          <div className="navigation-buttons">
            <Link to="/module3">
              <button className="prev-button">Previous Chapter</button>
            </Link>
            <Link to="/module5">
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
