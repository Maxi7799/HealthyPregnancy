import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header";
import "./index.css"
import { useTranslation } from "react-i18next";

export function Exercise(){

    const [t] = useTranslation("global")
    const cards = [
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-1-desc"),
        link: "/videopage1",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-2-desc"),
        link: "/videopage2",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-3-desc"),
        link: "/videopage3",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-4-desc"),
        link: "/videopage4",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-5-desc"),
        link: "/videopage5",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-6-desc"),
        link: "/videopage6",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-7-desc"),
        link: "/videopage7",
      },
      {
        image: "https://via.placeholder.com/150",
        description: t("exercise.card-8-desc"),
        link: "/videopage8",
      },
    ];


    return (
      <>
        <Header />

        <div className="container">
          <h1 className="title">{t("exercise.overview-title")}</h1>
          <div className="card-container">
            {cards.map((card, index) => (
              <Link to={card.link} className="card-link" key={index}>
                <div className="card">
                  <div className="image-container">
                    <img
                      src={card.image}
                      alt={card.description}
                      className="card-image"
                    />
                  </div>
                  <div className="card-title">{card.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </>
    );
}