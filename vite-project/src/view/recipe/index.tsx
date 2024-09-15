import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Checkbox } from "antd";
import { ArrowLeftOutlined,CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./index.css";
import { useState } from "react";

export const Recipe: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState(-1);

  const recipeChange = (index: number) => {
    setCurrentRecipe(index);
  };
  return (
    <>
      <Header></Header>
      {/* <div className="recipe-top-img"></div> */}
      <div className="recipe-list">
        <div className="recipe-img" onClick={() => recipeChange(0)}>
          <div
            className={
              "recipe-box " + (currentRecipe == 0 ? "recipe-box-act" : "")
            }
          >
            <div className="recipe-img-main recipe-img1"></div>
            <div className="recipe-img-text">BREAKFAST</div>
          </div>
        </div>
        <div className="recipe-img " onClick={() => recipeChange(1)}>
          <div
            className={
              "recipe-box " + (currentRecipe == 1 ? "recipe-box-act" : "")
            }
          >
            <div className="recipe-img-main recipe-img2"></div>
            <div className="recipe-img-text">DINNER</div>
          </div>
        </div>
        <div className="recipe-img " onClick={() => recipeChange(2)}>
          <div
            className={
              "recipe-box " + (currentRecipe == 2 ? "recipe-box-act" : "")
            }
          >
            <div className="recipe-img-main recipe-img3"></div>
            <div className="recipe-img-text">LUNCH</div>
          </div>
        </div>
        <div className="recipe-img" onClick={() => recipeChange(3)}>
          <div
            className={
              "recipe-box " + (currentRecipe == 3 ? "recipe-box-act" : "")
            }
          >
            <div className="recipe-img-main recipe-img4"></div>
            <div className="recipe-img-text">TEATIME</div>
          </div>
        </div>
      </div>

      <div className="recipe-list-add">
        <div className="recipe-list-left">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9].map(() => {
            return (
              <div className="recipe-list-item">
                <div className="recipe-list-img">
                  <div className="recipe-list-img-text">Beef Roast</div>
                </div>

                <div className="recipe-list-title">Pre Serving - 100g</div>
                <div className="recipe-list-data">
                  198 <span className="recipe-list-kcal">kcal</span>
                </div>

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
            );
          })}
        </div>
        <div className="recipe-list-right">
          <Link to="/recipe-result">
            <div className="recipe-add-icon"><CalendarOutlined /></div>
          </Link>

          <div>Personalized Schedule</div>
        </div>
      </div>
      <div className="recipe-top-10">
        <div className="recipe-top-10-title">
          <ArrowLeftOutlined
            style={{ marginRight: "10px" }}
          ></ArrowLeftOutlined>
          BREAKFAST RECOMMENDATIONS
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <>
              <div className="recipe-top-10-details">
                <div className="recipe-top-10-check">
                  <Checkbox />
                </div>
                <div className="recipe-top-10-right">
                  <div className="top10-right-top">
                    <div className="top10-right-top-img"></div>
                    <div className="top10-right-top-text">
                      <div className="top10-foodName">FOOD NAME</div>
                      <div>
                        High Protein ·Low Carb ·Sugar Conscious · Keto Friendly·
                        DairyFree · Gluten Free · Wheat Free " Egg Free · Peanut
                        Free * Tree NutFree " Soy Free · Fish Free ·Shellfish
                        Free · Pork Free ·CrustaceanFree " Celery Free · Mustard
                        Free " Sesame Free · Lupine Free "Mollusk Free "Alcohol
                        Free · No oil added. FODMAP FreeKosher "lmmuno
                        Supportive
                      </div>
                    </div>
                  </div>
                  <div className="top10-right-bottom">
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
                        <span className="top10-right-bottom-item-unit">
                          228 mg
                        </span>
                      </div>
                      <div className="top10-right-bottom-item-main">
                        <span>Sodium</span>
                        <span className="top10-right-bottom-item-unit">
                          846 mg
                        </span>
                      </div>
                      <div className="top10-right-bottom-item-main">
                        <span>Calcium</span>
                        <span className="top10-right-bottom-item-unit">
                          52 mg
                        </span>
                      </div>
                      <div className="top10-right-bottom-item-main">
                        <span>Magnesium</span>
                        <span className="top10-right-bottom-item-unit">
                          228 mg
                        </span>
                      </div>
                      <div className="top10-right-bottom-item-main">
                        <span>Potassium</span>
                        <span className="top10-right-bottom-item-unit">
                          1368 mg
                        </span>
                      </div>
                      <div className="top10-right-bottom-item-main">
                        <span>Iron</span>
                        <span className="top10-right-bottom-item-unit">
                          7 mg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Footer></Footer>
    </>
  );
};
