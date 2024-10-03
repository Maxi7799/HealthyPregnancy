import { useTranslation } from "react-i18next";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header/header";
import "./index.css";

export function PostpartumExercise() {
  const [t] = useTranslation("global");

  const cardsData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Pelvic Floor Weakness",
      condition:
        "Pregnancy and childbirth can weaken the pelvic floor muscles, leading to issues such as urinary incontinence and pelvic organ prolapse.",
      exerciseBenefits: [
        "Pelvic Floor Exercises (e.g., Slow Squeezes, Quick Squeezes, Cough Test): Strengthen the pelvic floor muscles, improving bladder control.",
        "Bridge Pose: Strengthens the pelvic floor and glutes, supporting lower back strength.",
      ],
      link: "/videomodule1",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Abdominal Weakness",
      condition:
        "Abdominal muscles can become weakened due to the growing uterus during pregnancy.",
      exerciseBenefits: [
        "Pelvic Tilts: Strengthens the core and supports lower back recovery.",
        "Side-Lying Leg Lifts: Improves core stability and strengthens the outer thighs.",
      ],
      link: "/videomodule2",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Lower Back Pain",
      condition:
        "Lower back pain is common due to carrying extra weight and muscle imbalances.",
      exerciseBenefits: [
        "Cat-Cow Pose: Stretches and strengthens the spine, relieving back pain.",
        "Squats: Strengthens the legs and glutes, reducing strain on the lower back.",
      ],
      link: "/videomodule3",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "General Fatigue and Low Energy",
      condition:
        "New mothers often experience fatigue and low energy due to the demands of caring for a newborn.",
      exerciseBenefits: [
        "Light Walking: Boosts cardiovascular health and energy levels.",
        "Gentle Stretching: Relieves muscle tension and enhances flexibility.",
      ],
      link: "/videomodule4",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Decreased Cardiovascular Fitness",
      condition:
        "Cardiovascular fitness may decline due to reduced physical activity and increased body weight.",
      exerciseBenefits: [
        "Aqua Aerobics: Improves cardiovascular endurance with minimal joint strain.",
        "Running: Increases cardiovascular stamina as fitness levels improve.",
      ],
      link: "/videomodule5",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Muscle Imbalances",
      condition:
        "Muscle imbalances occur due to altered posture and weight distribution during pregnancy.",
      exerciseBenefits: [
        "Bicep Curls: Maintains arm and shoulder strength, balancing muscle development.",
        "Bird-Dog: Engages the core and improves stability, addressing muscle imbalances.",
      ],
      link: "/videomodule6",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Stress and Mood Fluctuations",
      condition:
        "Postnatal women may experience mood swings and stress due to hormonal changes and the demands of new motherhood.",
      exerciseBenefits: [
        "Prenatal Yoga: Promotes relaxation and improves mood, helping alleviate stress.",
        "Gentle Stretching: Enhances relaxation and reduces muscle tension.",
      ],
      link: "/videomodule7",
    },
  ];
  return (
    <>
      <Header />
      <div className="postpartum-container">
        <h1>How Exercises Help Postnatal Conditions</h1>
        <div className="cards-list">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>
                  <strong>Condition: </strong>
                  {card.condition}
                </p>
                <p>
                  <strong>What exercises may help: </strong>
                  <ul>
                    {card.exerciseBenefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </p>
                <a href={card.link} className="learn-more">
                  Learn more details
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
