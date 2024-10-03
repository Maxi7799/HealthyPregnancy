import { useTranslation } from "react-i18next";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header/header";
import "./index.css";

export function PostpartumExercise() {
  const [t] = useTranslation("global");

  const cardsData = [
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-1-title"),
      condition: t("postpartum.card-1-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-1-exe-1-title"),
        t("postpartum.card-1-exe-2-title"),
      ],
      link: "/videomodule1",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-2-title"),
      condition: t("postpartum.card-2-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-2-exe-1-title"),
        t("postpartum.card-2-exe-2-title"),
      ],
      link: "/videomodule2",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-3-title"),
      condition: t("postpartum.card-3-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-3-exe-1-title"),
        t("postpartum.card-3-exe-2-title"),
      ],
      link: "/videomodule3",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-4-title"),
      condition: t("postpartum.card-4-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-4-exe-1-title"),
        t("postpartum.card-4-exe-2-title"),
      ],
      link: "/videomodule4",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-5-title"),
      condition: t("postpartum.card-5-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-5-exe-1-title"),
        t("postpartum.card-5-exe-2-title"),
      ],
      link: "/videomodule5",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-6-title"),
      condition: t("postpartum.card-6-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-6-exe-1-title"),
        t("postpartum.card-6-exe-2-title"),
      ],
      link: "/videomodule6",
    },
    {
      image: "https://via.placeholder.com/150",
      title: t("postpartum.card-7-title"),
      condition: t("postpartum.card-7-condition-desc"),
      exerciseBenefits: [
        t("postpartum.card-7-exe-1-title"),
        t("postpartum.card-7-exe-2-title"),
      ],
      link: "/videomodule7",
    },
  ];
  return (
    <>
      <Header />
      <div className="postpartum-container">
        <h1>{t("postpartum.title")}</h1>
        <div className="cards-list">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>
                  <strong>{t("postpartum.card-1-condition-title")}</strong>
                  {card.condition}
                </p>
                <p>
                  <strong>{t("postpartum.exe-recom-title")}</strong>
                  <ul>
                    {card.exerciseBenefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </p>
                <a href={card.link} className="learn-more">
                  {t("postpartum.more-detail")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
