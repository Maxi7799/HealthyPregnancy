import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { Checkbox, Space, Input, Row, Col, Modal, Form, Select } from "antd";
// import type { FormProps } from 'antd';
// import { Button, Checkbox, Form, Input } from 'antd';
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { rootAddress } from "../../../env.tsx";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { useEffect, useState } from "react";
import type { GetProp, FormProps } from "antd";
import { useTranslation } from "react-i18next";

let shoseBreakfast: any = [];
let shoseDinner: any = [];
let shoseLunch: any = [];
let shoseTeatime: any = [];

export const Recipe: React.FC = () => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [list, setList] = useState([]);
  const [chose, setChose] = useState<any>([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [t] = useTranslation("global");

  const [age, setAge] = useState("")
  const [activity, setActivity] = useState("")
  const [weight, setweight] = useState("")
  const [height, setheight] = useState("")
  const [trimester, settrimester] = useState("")


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
    sessionStorage.setItem("Breakfast", "[]");
    sessionStorage.setItem("Dinner", "[]");
    sessionStorage.setItem("Lunch", "[]");
    sessionStorage.setItem("Teatime", "[]");
    shoseBreakfast = [];
    shoseDinner = [];
    shoseLunch = [];
    shoseTeatime = [];
  }, []);

  const getData = async (index: number) => {
    const url = "/recipe/recommrecipe";
    const meal_time = ["Breakfast", "Dinner", "Lunch", "Teatime"];
    const response = await fetch(rootAddress + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meal_time: meal_time[index ? index : currentRecipe],
      }),
    });

    const data = await response.json();

    console.log(data);
    setList(data.recipes);
  };

  const checked: GetProp<typeof Checkbox.Group, "onChange"> = (e) => {
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

    console.log(shoseBreakfast, shoseDinner, shoseLunch, shoseTeatime)
    const newData = shoseBreakfast
      .concat(shoseDinner)
      .concat(shoseLunch)
      .concat(shoseTeatime);

    console.log(newData)

    // console.log(newData)
    setChose(newData);
    const meal_time = ["Breakfast", "Dinner", "Lunch", "Teatime"];
    sessionStorage.setItem(meal_time[currentRecipe], JSON.stringify(e));
  };

  const toResult = () => {
    const useInfo = sessionStorage.getItem("useInfo");
    if (useInfo) {
      navigate("/recipe-result");
    } else {
      setIsModalOpen(true);
    }
  };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    sessionStorage.setItem("useInfo", JSON.stringify({
      age, activity, weight, height, trimester
    }))
    navigate("/recipe-result");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    console.log(e)
    setActivity(e)
  }

  const ageChange = (e) => {
    console.log(e.target.value)
    setAge(e.target.value)
  }

  const handleChange2 = (e) => {
    settrimester(e)
  }

  const weightChange = (e) => {
    console.log(e.target.value)
    setweight(e.target.value)
  }

  const heightChange = (e) => {
    console.log(e.target.value)
    setheight(e.target.value)
  }
  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="age"
            name="age"
            style={{ marginBottom: 0 }}
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input onChange={(e) => ageChange(e)} value={age} />
          </Form.Item>

          <Form.Item
            label="activity"
            name="activity"
            style={{ marginBottom: 0 }}
            rules={[{ required: true, message: 'Please input your activity!' }]}
          >
            <Select
              defaultValue=""
              // style={{ width: 120 }}
              onChange={(e) => handleChange(e)}
              value={activity}
              options={[
                { value: 'no', label: 'no' },
                { value: 'low', label: 'low' },
                { value: 'active', label: 'active' },
                { value: 'very_active', label: 'very_active' },
              ]}
            />

          </Form.Item>


          <Form.Item
            label="weight"
            name="weight"
            style={{ marginBottom: 0 }}
            rules={[{ required: true, message: 'Please input your weight!' }]}
          >
            <Input onChange={(e) => weightChange(e)}
              value={weight} />
          </Form.Item>

          <Form.Item
            label="height"
            name="height"
            style={{ marginBottom: 0 }}
            rules={[{ required: true, message: 'Please input your height!' }]}
          >
            <Input onChange={(e) => heightChange(e)} value={height} />
          </Form.Item>

          <Form.Item
            label="trimester"
            name="trimester"
            style={{ marginBottom: 0 }}
            rules={[{ required: true, message: 'Please input your trimester!' }]}
          >
            <Select
              value={trimester}
              defaultValue=""
              // style={{ width: 120 }}
              onChange={(e) => handleChange2(e)}
              options={[
                { value: '1st', label: '1st' },
                { value: '2nd', label: '2nd' },
                { value: '3rd', label: '3rd' },
              ]}
            />
          </Form.Item>

        </Form>
      </Modal>
      <div className="recipe-page">
        <Header></Header>
        {/* <div className="recipe-top-img"></div> */}
        <div className="button-group">
          <div className={"button-item"}>
            <Link to="/nutrition-analysis?actTab=0" style={{ color: "#000" }}>
              {t("recipe.NutritionAnalysis")}
            </Link>
          </div>
          <div className={"button-item button-center"}>
            <Link to="/nutrition-analysis?actTab=1" style={{ color: "#000" }}>
              {t("recipe.Recommendation")}
            </Link>
          </div>
          <div className="button-item button-active">
            <Link to="/recipe" style={{ color: "#fff" }}>
              {t("recipe.Recipes")}
            </Link>
          </div>
        </div>

        <div className="recipe-title"> {t("recipe.FoodRecipes")}</div>
        <div className="recipe-text">
          {t("recipe.text")}
        </div>

        <div className="recipes-step">
          <div className="recipes-step-item">
            <div className="recipes-step-item-point">1</div>
            <div className="recipes-step-item-text">
              <span>{t("recipe.point-1-bold")}</span> {t("recipe.point-1")}
            </div>
          </div>
          <div className="recipes-step-arrow">
            <ArrowRightOutlined />
          </div>
          <div className="recipes-step-item">
            <div className="recipes-step-item-point">2</div>
            <div className="recipes-step-item-text">
              <span>{t("recipe.point-2-bold")}</span> {t("recipe.point-2")}
            </div>
          </div>
          <div className="recipes-step-arrow">
            <ArrowRightOutlined />
          </div>
          <div className="recipes-step-item">
            <div className="recipes-step-item-point">3</div>
            <div className="recipes-step-item-text">
              <span>{t("recipe.point-3-bold")}</span> {t("recipe.point-3")}
            </div>
          </div>
        </div>

        {/* <div className="recipe-tips">
          <span>Step 1</span>: Explore tons of food recipes based on the
          categories or search by name
        </div> */}

        <div className="recipe-label">{t("recipe.text1")}</div>

        <div className="recipe-list">
          <div className="recipe-img" onClick={() => recipeChange(0)}>
            <div
              className={
                "recipe-box " + (currentRecipe == 0 ? "recipe-box-act" : "")
              }
            >
              <div className="recipe-img-main recipe-img1"></div>
              <div className="recipe-img-text">{t("recipe.BREAKFAST")}</div>
            </div>
          </div>

          <div className="recipe-img " onClick={() => recipeChange(2)}>
            <div
              className={
                "recipe-box " + (currentRecipe == 2 ? "recipe-box-act" : "")
              }
            >
              <div className="recipe-img-main recipe-img3"></div>
              <div className="recipe-img-text">{t("recipe.LUNCH")}</div>
            </div>
          </div>
          <div className="recipe-img" onClick={() => recipeChange(3)}>
            <div
              className={
                "recipe-box " + (currentRecipe == 3 ? "recipe-box-act" : "")
              }
            >
              <div className="recipe-img-main recipe-img4"></div>
              <div className="recipe-img-text">{t("recipe.TEATIME")}</div>
            </div>
          </div>
          <div className="recipe-img " onClick={() => recipeChange(1)}>
            <div
              className={
                "recipe-box " + (currentRecipe == 1 ? "recipe-box-act" : "")
              }
            >
              <div className="recipe-img-main recipe-img2"></div>
              <div className="recipe-img-text">{t("recipe.DINNER")}</div>
            </div>
          </div>
        </div>

        <div className="recipe-list-add" style={{ margin: "20px auto" }}>
          <div className="recipe-list-left">
            {chose.map((item: any) => {
              return (
                <div className="recipe-list-item">
                  <div
                    className="recipe-list-img"
                    style={{
                      background:
                        "url(" +
                        item.food_picture +
                        ") no-repeat center center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="recipe-list-img-text">Beef Roast</div>
                  </div>

                  {/* <div className="recipe-list-title">Pre Serving - 100g</div> */}
                  <div className="recipe-list-data">
                    <span className="top10-kcal">
                      {item.calories_digits.toFixed(2)}
                    </span>
                    <span className="recipe-list-kcal">{t("recipe.kcal")}</span>
                  </div>

                  <div className="recipe-list-item-details">
                    <div className="recipe-list-item-left">
                      <div className="point"></div>
                      <div className="text">{t("recipe.PROTEIN")}</div>
                    </div>
                    <div className="recipe-list-item-right">
                      <div className="point">
                        {item.protein_digits.toFixed(2)}
                      </div>
                      <div className="unit">{item.protein_unit}</div>
                    </div>
                  </div>
                  <div className="recipe-list-item-details">
                    <div className="recipe-list-item-left">
                      <div className="point point-fat"></div>
                      <div className="text">{t("recipe.FAT")}</div>
                    </div>
                    <div className="recipe-list-item-right">
                      <div className="point">{item.fat_digits.toFixed(2)}</div>
                      <div className="unit">{item.fat_unit}</div>
                    </div>
                  </div>
                  <div className="recipe-list-item-details">
                    <div className="recipe-list-item-left">
                      <div className="point point-carb"></div>
                      <div className="text">{t("recipe.CARB")}</div>
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
            <div className="recipe-add-icon" onClick={toResult}>
              <CalendarOutlined />
            </div>
            {/* </Link> */}

            <div>{t("recipe.PersonalizedSchedule")}</div>
          </div>
        </div>

        <div className="recipe-label">{t("recipe.text2")}</div>

        <div className="search-name">
          <div className="input-box">
            <Input
              size="large"
              placeholder="e.g. Grilled Chicken"
              suffix={
                <div className="input-icon">
                  <CloseOutlined />
                </div>
              }
            />
          </div>
        </div>

        {/* <div className="recipe-tips">
          <span>Step 2</span>: Select food recipes of your choice and collect
          them in the Step 3
        </div> */}

        <div className="recipe-top-10">
          <div className="recipe-top-10-title">
            <ArrowLeftOutlined
              style={{ marginRight: "10px" }}
            ></ArrowLeftOutlined>
            {t("recipe.BREAKFASTRECOMMENDATIONS")}
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
                          <Space><div
                            className="top10-right-top-img"
                            style={{
                              background:
                                "url(" +
                                item.food_picture +
                                ") no-repeat center center",
                              backgroundSize: "contain",
                            }}
                          ></div>
                            <Space direction="vertical">
                              <div className="top10-right-top-text">
                                <div className="top10-foodName" style={{ textAlign: 'left' }}>
                                  {item.recipe_name}
                                </div>
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
                              {/* <div className="top10-right-bottom-item"> */}
                              {/* <div className="top10-servings">10 servings</div> */}
                              <div style={{ textAlign: 'left' }}>
                                <span className="top10-kcal">
                                  {item.calories_digits.toFixed(2)}
                                </span>
                                <span className="top10-kcal-unit">{t("recipe.kcal")}</span>
                              </div>
                              {/* </div> */}


                            </Space></Space>


                          <div className="top10-right-bottom-item top10-right-Protein">
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point"></div>
                                <div className="text">{t("recipe.Protein")}</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.protein_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.protein_unit}</div>
                              </div>
                            </div>
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point point-fat"></div>
                                <div className="text">{t("recipe.FAT")}</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.fat_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.fat_unit}</div>
                              </div>
                            </div>
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point point-carb"></div>
                                <div className="text">{t("recipe.CARB")}</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.carb_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.carb_unit}</div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="top10-right-bottom">

                          {/* <div className="top10-right-bottom-item">
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point"></div>
                                <div className="text">PROTEIN</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.protein_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.protein_unit}</div>
                              </div>
                            </div>
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point point-fat"></div>
                                <div className="text">FAT</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.fat_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.fat_unit}</div>
                              </div>
                            </div>
                            <div className="recipe-list-item-details">
                              <div className="recipe-list-item-left">
                                <div className="point point-carb"></div>
                                <div className="text">CARB</div>
                              </div>
                              <div className="recipe-list-item-right">
                                <div className="point">
                                  {item.carb_digits.toFixed(2)}
                                </div>
                                <div className="unit">{item.carb_unit}</div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="top10-right-bottom-item"> */}
                          <div className="top10-right-bottom-new">
                            <div className="top10-right-bottom-item-new">
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Cholesterol")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.cholesterol_digits.toFixed(2)}{" "}
                                  {item.cholesterol_unit}
                                </span>
                              </div>
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Sodium")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.sodium_digits.toFixed(2)}{" "}
                                  {item.sodium_unit}
                                </span>
                              </div>
                            </div>
                            <div className="top10-right-bottom-item-new">
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Calcium")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.calcium_digits.toFixed(2)}{" "}
                                  {item.calcium_unit}
                                </span>
                              </div>
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Magnesium")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.magnesium_digits.toFixed(2)}{" "}
                                  {item.magnesium_unit}
                                </span>
                              </div></div>
                            <div className="top10-right-bottom-item-new">
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Protein")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.potassium_digits.toFixed(2)}{" "}
                                  {item.potassium_unit}
                                </span>
                              </div>
                              <div className="top10-right-bottom-item-main">
                                <span>{t("recipe.Iron")}</span>
                                <span className="top10-right-bottom-item-unit">
                                  {item.iron_digits.toFixed(2)} {item.iron_unit}
                                </span>
                              </div></div>
                          </div>



                          {/* </div> */}
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
      </div>
    </>
  );
};
