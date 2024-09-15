import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Checkbox, Space } from "antd";
import { ArrowLeftOutlined, CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { rootAddress } from '../../../env.tsx'
import { useNavigate } from "react-router-dom";

import "./index.css";
import { useEffect, useState } from "react";
import type { GetProp } from "antd";

let shoseBreakfast: any = []
let shoseDinner: any = []
let shoseLunch: any = []
let shoseTeatime: any = []

export const Recipe: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [list, setList] = useState([])
  const [chose, setChose] = useState<any>([])
  const navigate = useNavigate()

  // const [shoseBreakfast, setChoseBreakFast] = useState<any>([])
  // const [shoseDinner, setChoseDinner] = useState<any>([])
  // const [shoseLunch, setChoseLunch] = useState<any>([])
  // const [shoseTeatime, setChoseTeatime] = useState<any>([])
  // const [choose, setChoose] = useState

  const recipeChange = (index: number) => {
    setCurrentRecipe(index);
    getData(index);
  };

  useEffect(() => {
    getData(0);
    // const meal_time = ['Breakfast', 'Dinner', 'Lunch', 'Teatime']
    localStorage.setItem('Breakfast', '[]')
    localStorage.setItem('Dinner', '[]')
    localStorage.setItem('Lunch', '[]')
    localStorage.setItem('Teatime', '[]')
  }, [])

  const getData = async (index: number) => {
    const url = "/recipe/recommrecipe";
    const meal_time = ['Breakfast', 'Dinner', 'Lunch', 'Teatime']
    const response = await fetch(rootAddress + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        "meal_time": meal_time[index ? index : currentRecipe],
      }),
    });

    const data = await response.json();

    console.log(data)
    setList(data.recipes)
  }

  const checked: GetProp<typeof Checkbox.Group, 'onChange'> = (e) => {
    console.log(e);
    if (currentRecipe == 0) {
      shoseBreakfast = e;
    }
    if (currentRecipe == 1) {
      shoseDinner = e;
    }
    if (currentRecipe == 2) {
      shoseLunch = e;
    }
    if (currentRecipe == 3) {
      shoseTeatime = e;
    }

    const newData = shoseBreakfast.concat(shoseDinner).concat(shoseLunch).concat(shoseTeatime)

    // console.log(newData)
    setChose(newData)
    const meal_time = ['Breakfast', 'Dinner', 'Lunch', 'Teatime']
    localStorage.setItem(meal_time[currentRecipe], JSON.stringify(e))
  }

  const toResult = () => {
    navigate('/recipe-result');
  }
  return (
    <>
      <Header></Header>
      {/* <div className="recipe-top-img"></div> */}
      <div className="button-group">
        <div
          className={
            "button-item"
          }
        >

          <Link to="/nutrition-analysis?actTab=0" style={{ color: "#000" }}>Nutrition Analysis</Link>
        </div>
        <div
          className={
            "button-item button-center"
          }
        >
          <Link to="/nutrition-analysis?actTab=1" style={{ color: "#000" }}>Recommendation</Link>
        </div>
        <div className="button-item button-active"><Link to="/recipe" style={{ color: "#fff" }}>Recipes</Link></div>
      </div>
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
          {chose.map((item: any) => {
            return (
              <div className="recipe-list-item">
                <div className="recipe-list-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}>
                  <div className="recipe-list-img-text">Beef Roast</div>
                </div>

                {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                <div className="recipe-list-data">
                  <span className="top10-kcal">{item.calories_digits.toFixed(2)}</span>
                  <span className="recipe-list-kcal">kcal</span>
                </div>

                <div className="recipe-list-item-details">
                  <div className="recipe-list-item-left">
                    <div className="point"></div>
                    <div className="text">PROTEIN</div>
                  </div>
                  <div className="recipe-list-item-right">
                    <div className="point">{item.protein_digits.toFixed(2)}</div>
                    <div className="unit">{item.protein_unit}</div>
                  </div>
                </div>
                <div className="recipe-list-item-details">
                  <div className="recipe-list-item-left">
                    <div className="point point-fat"></div>
                    <div className="text">FAT</div>
                  </div>
                  <div className="recipe-list-item-right">
                    <div className="point">{item.fat_digits.toFixed(2)}</div>
                    <div className="unit">{item.fat_unit}</div>
                  </div>
                </div>
                <div className="recipe-list-item-details">
                  <div className="recipe-list-item-left">
                    <div className="point point-carb"></div>
                    <div className="text">CARB</div>
                  </div>
                  <div className="recipe-list-item-right">
                    <div className="point">{item.carb_digits.toFixed(2)}</div>
                    <div className="unit">{item.carb_unit}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="recipe-list-right">
          {/* <Link to={"/recipe-result"}> */}
          <div className="recipe-add-icon" onClick={toResult}><CalendarOutlined /></div>
          {/* </Link> */}

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
        <Checkbox.Group style={{ width: "100%" }} onChange={checked}>
          <Space.Compact block direction="vertical">

            {list.map((item: any, index: number) => {
              return (
                <>
                  <div className="recipe-top-10-details">
                    <div className="recipe-top-10-check">
                      <Checkbox value={item} />
                    </div>
                    <div className="recipe-top-10-right">
                      <div className="top10-right-top">
                        <div className="top10-right-top-img" style={{ background: "url(" + item.food_picture + ') no-repeat center center', backgroundSize: 'contain' }}></div>
                        <div className="top10-right-top-text">
                          <div className="top10-foodName">{item.recipe_name}</div>
                          <div>
                            {/* High Protein ·Low Carb ·Sugar Conscious · Keto Friendly·
                        DairyFree · Gluten Free · Wheat Free " Egg Free · Peanut
                        Free * Tree NutFree " Soy Free · Fish Free ·Shellfish
                        Free · Pork Free ·CrustaceanFree " Celery Free · Mustard
                        Free " Sesame Free · Lupine Free "Mollusk Free "Alcohol
                        Free · No oil added. FODMAP FreeKosher "lmmuno */}
                            {/* Supportive */}
                          </div>
                        </div>
                      </div>
                      <div className="top10-right-bottom">
                        <div className="top10-right-bottom-item">
                          {/* <div className="top10-servings">10 servings</div> */}
                          <div>
                            <span className="top10-kcal">{item.calories_digits.toFixed(2)}</span>
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
                              <div className="point">{item.protein_digits.toFixed(2)}</div>
                              <div className="unit">{item.protein_unit}</div>
                            </div>
                          </div>
                          <div className="recipe-list-item-details">
                            <div className="recipe-list-item-left">
                              <div className="point point-fat"></div>
                              <div className="text">FAT</div>
                            </div>
                            <div className="recipe-list-item-right">
                              <div className="point">{item.fat_digits.toFixed(2)}</div>
                              <div className="unit">{item.fat_unit}</div>
                            </div>
                          </div>
                          <div className="recipe-list-item-details">
                            <div className="recipe-list-item-left">
                              <div className="point point-carb"></div>
                              <div className="text">CARB</div>
                            </div>
                            <div className="recipe-list-item-right">
                              <div className="point">{item.carb_digits.toFixed(2)}</div>
                              <div className="unit">{item.carb_unit}</div>
                            </div>
                          </div>
                        </div>
                        <div className="top10-right-bottom-item">
                          <div className="top10-right-bottom-item-main">
                            <span>Cholesterol</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.cholesterol_digits.toFixed(2)} {item.cholesterol_unit}
                            </span>
                          </div>
                          <div className="top10-right-bottom-item-main">
                            <span>Sodium</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.sodium_digits.toFixed(2)} {item.sodium_unit}
                            </span>
                          </div>
                          <div className="top10-right-bottom-item-main">
                            <span>Calcium</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.calcium_digits.toFixed(2)} {item.calcium_unit}
                            </span>
                          </div>
                          <div className="top10-right-bottom-item-main">
                            <span>Magnesium</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.magnesium_digits.toFixed(2)} {item.magnesium_unit}
                            </span>
                          </div>
                          <div className="top10-right-bottom-item-main">
                            <span>Potassium</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.potassium_digits.toFixed(2)} {item.potassium_unit}
                            </span>
                          </div>
                          <div className="top10-right-bottom-item-main">
                            <span>Iron</span>
                            <span className="top10-right-bottom-item-unit">
                              {item.iron_digits.toFixed(2)} {item.iron_unit}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Space.Compact>
        </Checkbox.Group>
      </div>

      <Footer></Footer>
    </>
  );
};
