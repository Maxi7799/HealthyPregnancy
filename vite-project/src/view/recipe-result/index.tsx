import "./index.css";
import "../recipe/index.css";
import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { ArrowLeftOutlined, FilePptOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export const RecipeResult: React.FC = () => {
  return (
    <>
      <Header />
      <div className="recipe-result">
        <div className="recipe-Schedule">
          <div className="arrow">
            <Link to="/recipe">
              <ArrowLeftOutlined></ArrowLeftOutlined>
            </Link>
          </div>
          Schedule
        </div>

        <div className="recipe-items">
          <div className="recipe-items-card card1">
            <div className="card-label">Breakfast</div>
          </div>
          <div className="recipe-items-card card2">
            <div className="card-label">Lunch</div>
          </div>
          <div className="recipe-items-card card3">
            <div className="card-label">Tea Time</div>
          </div>
          <div className="recipe-items-card card4">
            <div className="card-label">Dinner</div>
          </div>
        </div>

        <div
          className="top10-right-bottom"
          style={{ width: "70%", margin: "20px auto" }}
        >
          <div className="top10-right-bottom-item">
            <div className="top10-servings">10 servings</div>
            <div>
              <span className="top10-kcal">474</span>
              <span className="top10-kcal-unit">kcal</span>
            </div>
          </div>
          <div className="top10-right-bottom-item">
            <div className="recipe-list-item-details">
              <div className="recipe-list-item-left">
                <div className="point"></div>
                <div className="text">PROTEIN</div>
              </div>
              <div className="recipe-list-item-right">
                <div className="point">20</div>
                <div className="unit">g</div>
              </div>
            </div>
            <div className="recipe-list-item-details">
              <div className="recipe-list-item-left">
                <div className="point point-fat"></div>
                <div className="text">FAT</div>
              </div>
              <div className="recipe-list-item-right">
                <div className="point">20</div>
                <div className="unit">g</div>
              </div>
            </div>
            <div className="recipe-list-item-details">
              <div className="recipe-list-item-left">
                <div className="point point-carb"></div>
                <div className="text">CARB</div>
              </div>
              <div className="recipe-list-item-right">
                <div className="point">20</div>
                <div className="unit">g</div>
              </div>
            </div>
          </div>
          <div className="top10-right-bottom-item">
            <div className="top10-right-bottom-item-main">
              <span>Cholesterol</span>
              <span className="top10-right-bottom-item-unit">228 mg</span>
            </div>
            <div className="top10-right-bottom-item-main">
              <span>Sodium</span>
              <span className="top10-right-bottom-item-unit">846 mg</span>
            </div>
            <div className="top10-right-bottom-item-main">
              <span>Calcium</span>
              <span className="top10-right-bottom-item-unit">52 mg</span>
            </div>
            <div className="top10-right-bottom-item-main">
              <span>Magnesium</span>
              <span className="top10-right-bottom-item-unit">228 mg</span>
            </div>
            <div className="top10-right-bottom-item-main">
              <span>Potassium</span>
              <span className="top10-right-bottom-item-unit">1368 mg</span>
            </div>
            <div className="top10-right-bottom-item-main">
              <span>Iron</span>
              <span className="top10-right-bottom-item-unit">7 mg</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "right", fontSize: "42px",cursor:"pointer" }}>
          <FilePptOutlined />
        </div>
      </div>

      <Footer />
    </>
  );
};
