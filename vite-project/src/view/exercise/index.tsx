import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/header";
import "./index.css"

export function Exercise(){

    const cards = [
      {
        image: "https://via.placeholder.com/150",
        description: "Card 1 description",
        link: "/videopage1",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 2 description",
        link: "/card-2",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 3 description",
        link: "/card-3",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 4 description",
        link: "/card-4",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 5 description",
        link: "/card-5",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 6 description",
        link: "/card-6",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 7 description",
        link: "/card-7",
      },
      {
        image: "https://via.placeholder.com/150",
        description: "Card 8 description",
        link: "/card-8",
      },
    ];


    return (
      <>
        <Header />

        <div className="container">
          <h1 className="title">Pregnancy Wellness</h1>
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