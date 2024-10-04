import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header";
import "./index.css"
import { useTranslation } from "react-i18next";
import quizIcon from "../../../src/assets/exercise/exe-q.png"

export function Exercise(){

    const [t] = useTranslation("global")
    const cards = [
      {
        image:
          "https://images.pexels.com/photos/7155395/pexels-photo-7155395.jpeg",
        description: t("exercise.card-1-desc"),
        link: "/videopage1",
      },
      {
        image:
          "https://images.pexels.com/photos/7055643/pexels-photo-7055643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-2-desc"),
        link: "/videopage2",
      },
      {
        image:
          "https://images.pexels.com/photos/3984367/pexels-photo-3984367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-3-desc"),
        link: "/videopage3",
      },
      {
        image:
          "https://images.pexels.com/photos/18090690/pexels-photo-18090690/free-photo-of-a-woman-with-a-swimming-cap-and-goggles-in-the-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-4-desc"),
        link: "/videopage4",
      },
      {
        image:
          "https://images.pexels.com/photos/7524706/pexels-photo-7524706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-5-desc"),
        link: "/videopage5",
      },
      {
        image:
          "https://images.pexels.com/photos/8032780/pexels-photo-8032780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-6-desc"),
        link: "/videopage6",
      },
      {
        image:
          "https://img.freepik.com/free-photo/side-view-woman-exercising-home_23-2149601628.jpg?w=2000&t=st=1728012325~exp=1728012925~hmac=5a08510b2c5176d4c8e53b2c1f569c7f1384b12cd47dbec5347f6c022d39c78b",
        description: t("exercise.card-7-desc"),
        link: "/videopage7",
      },
      {
        image:
          "https://images.pexels.com/photos/7155523/pexels-photo-7155523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: t("exercise.card-8-desc"),
        link: "/videopage8",
      },
    ];


    return (
      <>
        <Header />
        <div className="container">
          <h1 className="title">{t("exercise.overview-title")}</h1>
          <div className="question-btn">
            <Link className="quiz-banner-container" to="/healthyquestionnari">
              <div className="quiz-text">
                <span>◆</span> {t("exercise.questionnaire-access")}
              </div>
              <div className="quiz-icon">
                <img src={quizIcon} alt="Quiz Button" />
              </div>
            </Link>
          </div>
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